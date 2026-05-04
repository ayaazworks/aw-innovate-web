import React from 'react';

function Contact() {
  const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '70vh',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    card: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
      textAlign: 'center',
      maxWidth: '450px',
      width: '100%',
      borderTop: '6px solid #2c3e50', // Matching your primary heading color
    },
    heading: {
      color: '#2c3e50',
      fontSize: '1.8rem',
      marginBottom: '10px',
    },
    devName: {
      fontSize: '1.2rem',
      color: '#555',
      margin: '0 0 25px 0',
      fontWeight: '400',
    },
    infoBox: {
      backgroundColor: '#f9f9f9', // Matching Privacy Policy contact box
      padding: '20px',
      borderRadius: '10px',
      border: '1px solid #eee',
    },
    label: {
      display: 'block',
      fontSize: '0.8rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      color: '#7f8c8d',
      marginBottom: '8px',
    },
    email: {
      color: '#3498db', // Matching Privacy Policy accent blue[cite: 3]
      textDecoration: 'none',
      fontSize: '1.1rem',
      fontWeight: '600',
    },
    footerText: {
      marginTop: '30px',
      fontSize: '0.9rem',
      color: '#95a5a6',
      fontStyle: 'italic',
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Developer Details</h1>
        {/* Verification name must match your Play Console account */}
        <p style={styles.devName}>Mohd Ayaaz Siddiqui</p>
        
        <div style={styles.infoBox}>
          <span style={styles.label}>Support Email</span>
          <a href="mailto:ayaazatom@gmail.com" style={styles.email}>
            ayaazatom@gmail.com
          </a>
        </div>

        <p style={styles.footerText}>
          Official support for Indian Charades: Word Party Game
        </p>
      </div>
    </div>
  );
}

export default Contact;