import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import './App.css';
import 'animate.css';

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = (name, location) => {
    setSearchName(name);
    setSearchLocation(location);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <Navbar onSearch={handleSearch} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <EventList searchName={searchName} searchLocation={searchLocation} />
    </div>
  );
};

export default App;
