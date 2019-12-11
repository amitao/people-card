import React from 'react';
import './Search.css';

// functional component - get props and return html
export const Search = ({ placeholder, handleChange, value}) => {
  return (
    <div>
      <input
        className="search-box"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}