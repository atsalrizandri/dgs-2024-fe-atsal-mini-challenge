import React from 'react';
import '../assets/transactionlist.css';

const TransactionList = () => {
  const transactions = [
    { id: 1, name: 'Restaurants & Cafe', date: '20 August 2019', amount: '-$99.00' },
    { id: 2, name: 'Clothes & Shopping', date: '25 September 2019', amount: '-$2,357' },
    { id: 3, name: 'Credit & Loans', date: '10 April 2019', amount: '-$4,867' },
    { id: 4, name: 'Gifts Card', date: '10 October 2019', amount: '-$85.00' },
  ];

  return (
    <div className="transaction-list">
      <h2>Transactions</h2>
      {transactions.map((transaction) => (
        <div key={transaction.id} className="transaction-item">
          <div className="transaction-info">
            <h4>{transaction.name}</h4>
            <p>{transaction.date}</p>
          </div>
          <div className="transaction-amount">
            <p>{transaction.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;