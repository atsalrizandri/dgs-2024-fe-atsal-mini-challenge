import React from 'react';

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="filters">
        <button>Group By</button>
        <button>Realisation</button>
        <button>Dates</button>
        <button>Types</button>
      </div>
      <div className="transactions">
        <div className="transaction-item">
          <div className="transaction-details">
            <span className="transaction-category">Restaurants & Cafe</span>
            <span className="transaction-date">20 August 2019</span>
          </div>
          <div className="transaction-amount">-$99.00</div>
          <div className="transaction-actions">
            <button>Bookmark</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;