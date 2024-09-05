import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Filters from './components/Filters';
import TransactionList from './components/TransactionList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="transaction-section">
          <Filters />
          <TransactionList />
        </div>
      </div>
    </div>
  );
}

export default App;