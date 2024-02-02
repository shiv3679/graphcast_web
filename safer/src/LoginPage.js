// src/LoginPage.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuth } from './AuthContext'; // Import the AuthContext
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { currentUser } = useAuth(); // Consume the AuthContext
  const auth = getAuth();

  useEffect(() => {
    if (currentUser) {
      navigate('/'); // Navigate to the homepage if the user is logged in
    }
  }, [currentUser, navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error("Error signing in with email and password", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, new GoogleAuthProvider());
      navigate('/');
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleGoogleLogin} className="google-login">Login with Google</button>
    </div>
  );
};

export default LoginPage;
