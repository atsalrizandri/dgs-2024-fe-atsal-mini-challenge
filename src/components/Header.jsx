import React from 'react';
import '../assets/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Budget</div>
      <input className="search-bar" type="text" placeholder="Search" />
      <nav className="nav">
        <a href="/">Overview</a>
        <a href="/">Finance</a>
        <a href="/">Calendar</a>
        <a href="/">Events</a>
      </nav>
    </header>
  );
};

export default Header;