import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#2c3e50', // Matches your document headers
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    brand: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: '#ffffff',
      textDecoration: 'none',
      letterSpacing: '1px',
    },
    linkContainer: {
      display: 'flex',
      gap: '20px',
    },
    link: {
      color: '#ecf0f1',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'color 0.3s ease',
    }
  };

  return (
    <nav style={styles.nav}>
      {/* Brand Name for your game */}
      <Link to="/" style={styles.brand}>
        Indian Charades
      </Link>

      <div style={styles.linkContainer}>
        <Link to="/" style={styles.link} className="nav-link">Home</Link>
        
        {/* Accented Privacy link[cite: 3] */}
        <Link to="/privacy" style={styles.link} className="nav-link">
          Privacy Policy
        </Link>
        
        {/* Accented Terms link[cite: 5] */}
        <Link to="/terms" style={styles.link} className="nav-link">
          Terms and Conditions
        </Link>
        
        <Link to="/contact" style={styles.link} className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;