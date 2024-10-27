import React, { useState } from 'react';

const Navbar = ({ onSearch, toggleDarkMode, isDarkMode }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch(name, location);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-title">EventSpot Lite</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search events by name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="search-input"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
