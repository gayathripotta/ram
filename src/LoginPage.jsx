import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import './Login.css';

const LoginPage = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const validEmail = 'gayathripotta@gmail.com';
  const validPassword = '1234';

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage(''); // Clear previous error message
    if (email === validEmail && password === validPassword) {
      setIsLoggedIn(true);
      setSuccessMessage('Login successful! Redirecting to chat...');
      setTimeout(() => {
        navigate("/chat");
      }, 2000);
    } else {
      setErrorMessage('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="login-signup-page">
      <div className="form-container">
        <h1>Login</h1>
        {successMessage && <div className="success-message">{successMessage}</div>}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">Login</button>
        </form>

        {}
        <p>Don't have an account? <Link to="/signup">Sign up here</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
