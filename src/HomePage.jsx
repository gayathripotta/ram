import React from 'react'; 
import './HomePage.css';
import { Link } from 'react-router-dom'; 
import MessengerAppSection from './MessengerAppSection';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">Link Up</div>
        <ul className="nav-links">
          {['Link Up', 'Messenger APP', 'Services'].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(' ', '-')}`}><b>{item}</b></a>
            </li>
          ))}
          <li>
            <Link to="/chat"><b>Chat</b></Link>
          </li>
        </ul>

        <div className="auth-buttons">
          <Link to="/login" className="login-btn">Login</Link>
          <Link to="/signup" className="signup-btn">Sign Up</Link>
        </div>
      </nav>

      <header className="hero-section" id="link-up">
        <div className="hero-content">
          <h1>Link Up</h1>
          <p>Welcome to Link Up!</p>
        </div>
      </header>

      <section id="messenger-app">
        <MessengerAppSection />
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
