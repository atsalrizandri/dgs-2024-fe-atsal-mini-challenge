import React from 'react';
import '../assets/sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="wallets">
        <h3>Wallets</h3>
        <ul>
          <li>Home Wallet <span>$235,000</span></li>
          <li>Investment <span>$875,000</span></li>
        </ul>
      </div>
      <div className="categories">
        <h3>Categories</h3>
        <ul>
          <li>Bills <span>$235,000</span></li>
          <li>Education <span>$125,000</span></li>
          <li>Utility</li>
          <li>Shopping</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;