import React from 'react';
import './Filter.css';

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Search by rating"
        min="1"
        max="5"
        onChange={(e) => setFilterRating(e.target.value)}
      />
    </div>
  );
};

export default Filter;
