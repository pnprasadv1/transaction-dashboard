(this["webpackJsonptransaction-dashboard"]=this["webpackJsonptransaction-dashboard"]||[]).push([[0],{47:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(40),n=a.n(r),i=(a(47),a(71)),o=a(1);var l=()=>Object(o.jsxs)("div",{className:"sidebar bg-dark text-white p-3",style:{width:"250px"},children:[Object(o.jsx)("h4",{children:"Transaction Dashboard"}),Object(o.jsxs)(i.a,{className:"flex-column",children:[Object(o.jsx)(i.a.Link,{href:"#",children:"Dashboard"}),Object(o.jsx)(i.a.Link,{href:"#",children:"Transactions"}),Object(o.jsx)(i.a.Link,{href:"#",children:"Reports"})]})]}),d=a(69),j=a(66);var b=()=>Object(o.jsx)(d.a,{bg:"light",expand:"lg",children:Object(o.jsx)(j.a,{children:Object(o.jsx)(d.a.Brand,{href:"#",children:"Transaction Dashboard"})})}),h=a(3),x=a(32),O=a(70),p=a(67),g=a(72),u=a(68),m=a(35),T=a(25),v=a(34);a(54);var D=()=>{const[e,t]=Object(s.useState)([]),[a,c]=Object(s.useState)(!0);Object(s.useEffect)((()=>{O.a.get("https://jsonplaceholder.typicode.com/posts").then((e=>{t(e.data),c(!1)})).catch((e=>{console.error("Error fetching data",e),c(!1)}))}),[]);const r=Object(s.useMemo)((()=>[{Header:"Transaction ID",accessor:"id"},{Header:"Transaction Date",accessor:"date"},{Header:"Transaction Details",accessor:"title"},{Header:"Status",accessor:"status"},{Header:"Action",accessor:"action",Cell:e=>{let{row:t}=e;return Object(o.jsxs)("div",{children:[Object(o.jsx)(p.a,{variant:"info",onClick:()=>f(t.original),style:{marginRight:"5px"},children:"Details"}),Object(o.jsxs)(p.a,{variant:"warning",onClick:()=>y(t.original),style:{marginRight:"5px"},children:[Object(o.jsx)(m.a,{})," Edit"]}),Object(o.jsxs)(p.a,{variant:"danger",onClick:()=>w(t.original.id),children:[Object(o.jsx)(m.b,{})," Delete"]})]})}}]),[]),{getTableProps:n,getTableBodyProps:i,headerGroups:l,rows:d,prepareRow:j,state:{globalFilter:b},setGlobalFilter:D}=Object(x.useTable)({columns:r,data:e,initialState:{sortBy:[{id:"id",desc:!1}]}},x.useGlobalFilter,x.useSortBy),f=e=>{alert("Details for Transaction ID: ".concat(e.original.id))},y=e=>{alert("Editing Transaction ID: ".concat(e.id))},w=e=>{window.confirm("Are you sure you want to delete Transaction ID: ".concat(e,"?"))&&(alert("Transaction ID: ".concat(e," deleted.")),t((t=>t.filter((t=>t.id!==e)))))};return Object(o.jsxs)("div",{children:[Object(o.jsx)(g.a.Control,{type:"text",placeholder:"Search...",value:b||"",onChange:e=>D(e.target.value),style:{marginBottom:"10px"}}),Object(o.jsxs)("div",{style:{marginBottom:"10px"},children:[Object(o.jsx)(p.a,{variant:"success",onClick:()=>{const t=e.map((e=>({"Transaction ID":e.id,"Transaction Date":e.date,"Transaction Details":e.title,Status:e.status})));let a="data:text/csv;charset=utf-8,"+["Transaction ID","Transaction Date","Transaction Details","Status"].join(",")+"\n";t.forEach((e=>{a+=Object.values(e).join(",")+"\n"}));const s=encodeURI(a),c=document.createElement("a");c.setAttribute("href",s),c.setAttribute("download","transactions.csv"),c.click()},children:"Export to CSV"}),Object(o.jsx)(p.a,{variant:"primary",onClick:()=>{const t=T.a.json_to_sheet(e),a=T.a.book_new();T.a.book_append_sheet(a,t,"Transactions"),T.b(a,"transactions.xlsx")},style:{marginLeft:"10px"},children:"Export to Excel"}),Object(o.jsx)(p.a,{variant:"danger",onClick:()=>{const t=new v.default,a=e.map((e=>[e.id,e.date,e.title,e.status]));t.autoTable(["Transaction ID","Transaction Date","Transaction Details","Status"],a),t.save("transactions.pdf")},style:{marginLeft:"10px"},children:"Export to PDF"})]}),Object(o.jsxs)(u.a,Object(h.a)(Object(h.a)({},n()),{},{striped:!0,bordered:!0,hover:!0,children:[Object(o.jsx)("thead",{children:l.map((e=>Object(o.jsx)("tr",Object(h.a)(Object(h.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((e=>Object(o.jsxs)("th",Object(h.a)(Object(h.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{style:{cursor:"pointer"},children:[e.render("Header"),Object(o.jsx)("span",{children:e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""})]}))))}))))}),Object(o.jsx)("tbody",Object(h.a)(Object(h.a)({},i()),{},{children:a?Object(o.jsx)("tr",{children:Object(o.jsx)("td",{colSpan:"5",children:"Loading..."})}):d.map((e=>(j(e),Object(o.jsx)("tr",Object(h.a)(Object(h.a)({},e.getRowProps()),{},{children:e.cells.map((e=>Object(o.jsx)("td",Object(h.a)(Object(h.a)({},e.getCellProps()),{},{children:e.render("Cell")}))))})))))}))]}))]})};var f=()=>Object(o.jsxs)("div",{className:"d-flex",children:[Object(o.jsx)(l,{}),Object(o.jsxs)("div",{className:"flex-grow-1",children:[Object(o.jsx)(b,{}),Object(o.jsx)(D,{})]})]});var y=e=>{e&&e instanceof Function&&a.e(6).then(a.bind(null,190)).then((t=>{let{getCLS:a,getFID:s,getFCP:c,getLCP:r,getTTFB:n}=t;a(e),s(e),c(e),r(e),n(e)}))};a(59);n.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(f,{})})),y()}},[[60,1,3]]]);
//# sourceMappingURL=main.9e9b008e.chunk.js.map