// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import useAuth to access the current user
import { getAuth, signOut } from 'firebase/auth'; // Import signOut for logout functionality
import './Navbar.css';

const Navbar = () => {
  const { currentUser } = useAuth(); // Get the current user from the context
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="brand-name">S.A.F.E.R</Link>
      <div className="nav-items">
        <Link to="/">Home</Link>
        <Link to="/forecasts">Forecasts</Link>
        <Link to="/data">Data</Link>
        {currentUser ? (
          <React.Fragment>
            <span className="navbar-text">{currentUser.displayName || currentUser.email}</span>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </React.Fragment>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
