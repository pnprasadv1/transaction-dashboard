import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TransactionTable from './components/TransactionTable';

const App = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Header />
        <TransactionTable />
      </div>
    </div>
  );
};

export default App;
