import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white p-3" style={{ width: '250px' }}>
      <h4>Transaction Dashboard</h4>
      <Nav className="flex-column">
        <Nav.Link href="#">Dashboard</Nav.Link>
        <Nav.Link href="#">Transactions</Nav.Link>
        <Nav.Link href="#">Reports</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
