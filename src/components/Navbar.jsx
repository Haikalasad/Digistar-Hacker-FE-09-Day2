import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">MyApp</Link>
      <ul className="navbar-list">
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/about" className="navbar-link">About</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
        {isLoggedIn && (
          <>
          <li><Link to="/dashboard" className="navbar-link">Dashboard</Link></li>
          <li><Link to="/users" className="navbar-link">User</Link></li>
          </>
        )}
        <li>
          <button onClick={handleLoginLogout}>
            {isLoggedIn ? 'Logout' : 'Login'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
