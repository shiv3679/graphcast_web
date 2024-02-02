// src/HomePage.js
import React, { useState } from 'react';
import './HomePage.css'; // Make sure to create and import your CSS file for styling

const HomePage = () => {
  const [selectedVariable, setSelectedVariable] = useState(''); // State to keep track of the selected variable
  
  const variables = ['Variable 1', 'Variable 2', 'Variable 3']; // Placeholder variable names

  return (
    <div className="home-page">
      <h1 className="home-title">
        Welcome to Smart Alert Framework for Extreme weather Reactions (
        <span className="safer-acronym">
          <span className="bold-letter">S</span>.A.F.E.R.)
        </span>
      </h1>
      <div className="content">
        <div className="sidebar">
          <label htmlFor="variable-select">Choose a variable:</label>
          <select
            id="variable-select"
            value={selectedVariable}
            onChange={(e) => setSelectedVariable(e.target.value)}
          >
            {variables.map((variable) => (
              <option key={variable} value={variable}>
                {variable}
              </option>
            ))}
          </select>
        </div>
        <div className="main-content">
          <img src="/forecast.png" alt="Forecast" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
