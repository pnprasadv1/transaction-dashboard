import React, { useMemo, useState, useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import axios from "axios";
import { Table, Form, Button } from "react-bootstrap"; // Use Form.Control for input field
import { FaEdit, FaTrashAlt } from "react-icons/fa"; // Import icons for Edit and Delete
import * as XLSX from "xlsx"; // For Excel export
import jsPDF from "jspdf"; // For PDF export
import "jspdf-autotable"; // For PDF tables

const TransactionTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching data from a public API (example: JSONPlaceholder)
    axios
      .get("https://jsonplaceholder.typicode.com/posts") // Change to your API
      .then((response) => {
        setData(response.data); // Assuming API returns an array of objects
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setLoading(false);
      });
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: "Transaction ID",
        accessor: "id", // Data field to be displayed in this column
      },
      {
        Header: "Transaction Date",
        accessor: "date", // You can format the date as needed
      },
      {
        Header: "Transaction Details",
        accessor: "title", // Using title as a placeholder for transaction details
      },
      {
        Header: "Status",
        accessor: "status", // Add a status field as necessary
      },
      {
        Header: "Action",
        accessor: "action", // Placeholder for action buttons
        Cell: ({ row }) => (
          <div>
            <Button
              variant="info"
              onClick={() => handleDetails(row.original)} // Show transaction details
              style={{ marginRight: "5px" }}
            >
              Details
            </Button>
            <Button
              variant="warning"
              onClick={() => handleEdit(row.original)} // Edit functionality
              style={{ marginRight: "5px" }}
            >
              <FaEdit /> Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(row.original.id)} // Delete functionality
            >
              <FaTrashAlt /> Delete
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  // Using react-table hooks
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { globalFilter },
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { sortBy: [{ id: "id", desc: false }] }, // Default sorting by Transaction ID
    },
    useGlobalFilter, // For searching
    useSortBy // For sorting
  );

  // Handler for showing details (mock implementation)
  const handleDetails = (row) => {
    alert(`Details for Transaction ID: ${row.original.id}`);
  };

  // Edit Handler (mock implementation)
  const handleEdit = (transaction) => {
    alert(`Editing Transaction ID: ${transaction.id}`);
    // You can add logic here to open an edit modal or navigate to an edit page.
  };

  // Delete Handler (mock implementation)
  const handleDelete = (transactionId) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete Transaction ID: ${transactionId}?`
    );
    if (confirmDelete) {
      alert(`Transaction ID: ${transactionId} deleted.`);
      // You can add logic here to delete the transaction from the API or state
      setData((prevData) => prevData.filter((item) => item.id !== transactionId));
    }
  };

  // Export to CSV
  const exportToCSV = () => {
    const csvData = data.map((row) => ({
      "Transaction ID": row.id,
      "Transaction Date": row.date,
      "Transaction Details": row.title,
      Status: row.status,
    }));
    const header = [
      "Transaction ID",
      "Transaction Date",
      "Transaction Details",
      "Status",
    ];
    let csvContent = "data:text/csv;charset=utf-8," + header.join(",") + "\n";
    csvData.forEach((row) => {
      csvContent += Object.values(row).join(",") + "\n";
    });

    // Create a download link and trigger it
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "transactions.csv");
    link.click();
  };

  // Export to Excel
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Transactions");
    XLSX.writeFile(wb, "transactions.xlsx");
  };

  // Export to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    const tableColumn = [
      "Transaction ID",
      "Transaction Date",
      "Transaction Details",
      "Status",
    ];
    const tableRows = data.map((row) => [
      row.id,
      row.date,
      row.title,
      row.status,
    ]);

    doc.autoTable(tableColumn, tableRows);
    doc.save("transactions.pdf");
  };

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Search..."
        value={globalFilter || ""}
        onChange={(e) => setGlobalFilter(e.target.value)}
        style={{ marginBottom: "10px" }}
      />

      <div style={{ marginBottom: "10px" }}>
        <Button variant="success" onClick={exportToCSV}>
          Export to CSV
        </Button>
        <Button variant="primary" onClick={exportToExcel} style={{ marginLeft: "10px" }}>
          Export to Excel
        </Button>
        <Button variant="danger" onClick={exportToPDF} style={{ marginLeft: "10px" }}>
          Export to PDF
        </Button>
      </div>

      <Table {...getTableProps()} striped bordered hover>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{ cursor: "pointer" }}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {loading ? (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          ) : (
            rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionTable;
