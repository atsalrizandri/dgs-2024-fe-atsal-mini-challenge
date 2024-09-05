import React from 'react';
import '../assets/filters.css';

const Filters = () => {
  return (
    <div className="filters">
      <button>Group By</button>
      <button>Realisation</button>
      <button>Dates</button>
      <button>Types</button>
      <button>Sample</button>
      <button>Extended</button>
    </div>
  );
};

export default Filters;