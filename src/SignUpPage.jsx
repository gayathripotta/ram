import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import './SignUpPage.css';

const SignUpPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = [];

    // Basic form validation
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) newErrors.push(key);
    });

    if (newErrors.length === 0) {
      console.log('Form submitted:', formData);
      navigate("/login"); // Redirect to login after successful signup
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-signup-page">
      <div className="form-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn">Sign Up</button>
          {errors.length > 0 && (
            <div className="error-message">
              Please fill in the following fields:
              <ul>
                {errors.map((error, index) => <li key={index}>{error}</li>)}
              </ul>
            </div>
          )}
        </form>
        {/* Replace anchor tag with Link */}
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  );
};

export default SignUpPage;
