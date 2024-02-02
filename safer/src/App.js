import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';
import Forecasts from './Forecasts';
import Data from './Data';
import LoginPage from './LoginPage';
import Navbar from './Navbar';
import Footer from './Footer'; // Import the Footer component

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/" 
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/forecasts" 
            element={
              <PrivateRoute>
                <Forecasts />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/data" 
            element={
              <PrivateRoute>
                <Data />
              </PrivateRoute>
            } 
          />
        </Routes>
        <Footer /> {/* Include the Footer */}
      </AuthProvider>
    </Router>
  );
}

export default App;
