import React from 'react';

const Terms = () => {
  // Styles based on your provided CSS
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: '1.6',
      color: '#333',
      backgroundColor: '#ffffff',
    },
    h1: {
      color: '#2c3e50',
      borderBottom: '2px solid #e67e22',
      paddingBottom: '10px',
      fontSize: '22pt',
      marginBottom: '20px',
    },
    h2: {
      color: '#d35400',
      fontSize: '16pt',
      marginTop: '25px',
      borderLeft: '5px solid #e67e22',
      paddingLeft: '10px',
      marginBottom: '15px',
    },
    lastUpdated: {
      fontStyle: 'italic',
      color: '#7f8c8d',
      marginBottom: '30px',
    },
    contactInfo: {
      backgroundColor: '#fffaf5',
      padding: '15px',
      borderRadius: '5px',
      border: '1px solid #f39c12',
      marginTop: '30px',
    },
    list: {
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '8px',
    },
    disclaimer: {
      fontWeight: 'bold',
      color: '#c0392b',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Terms and Conditions</h1>
      <p style={styles.lastUpdated}>Last Updated: May 04 2026</p>

      <p>
        Please read these Terms and Conditions carefully before using the 
        <strong> Indian Charades: Word Party Game</strong> mobile application (the "Service") 
        operated by <strong>Mohd Ayaaz Siddiqui</strong> ("us", "we", or "our"). 
        Your access to and use of the Service is conditioned on your acceptance of and 
        compliance with these Terms. By accessing or using the Service you 
        agree to be bound by these Terms.
      </p>

      <h2 style={styles.h2}>1. License to Use</h2>
      <p>
        We grant you a revocable, non-exclusive, non-transferable, limited license to download, 
        install, and use the application strictly in accordance with these Terms. 
        This game is for your personal, non-commercial entertainment. 
        You agree not to copy, reverse engineer, or attempt to derive the source code of the app.
      </p>

      <h2 style={styles.h2}>2. Content Disclaimer</h2>
      <p style={styles.disclaimer}>"Indian Charades" is created for entertainment purposes only.</p>
      <p>
        The game does not promote, endorse, or encourage any illegal activities, 
        including but not limited to fraud (Section 420 IPC), drug use, or criminal behavior. 
        Any resemblance to real persons or actual events is purely coincidental.
      </p>

      <h2 style={styles.h2}>3. Virtual Items and In-App Purchases</h2>
      <p>If the game allows the purchase of virtual currency or items:</p>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <strong>Google Play Billing:</strong> All financial transactions are processed securely 
          through the Google Play Store billing system.
        </li>
        <li style={styles.listItem}>
          <strong>No Real-World Value:</strong> Virtual items have no real-world monetary value 
          and cannot be exchanged for cash.
        </li>
        <li style={styles.listItem}>
          <strong>Refund Policy:</strong> All purchases are final and non-refundable, except as 
          required by the policies of the Google Play Store or applicable law.
        </li>
      </ul>

      <h2 style={styles.h2}>4. User Conduct</h2>
      <p>
        By using the app, you agree NOT to use the app for any unlawful purpose, 
        use cheats/hacks to interfere with the Service, or attempt to gain 
        unauthorized access to our servers. We reserve the right to terminate 
        your access immediately for any breach of these Terms.
      </p>

      <h2 style={styles.h2}>5. Intellectual Property</h2>
      <p>
        The Service and its original content, features, and functionality remain the exclusive 
        property of Mohd Ayaaz Siddiqui and its licensors. The Service is protected 
        by copyright and trademark laws of India and foreign countries.
      </p>

      <h2 style={styles.h2}>6. Limitation of Liability</h2>
      <p>
        In no event shall Mohd Ayaaz Siddiqui be liable for any indirect, incidental, or 
        consequential damages resulting from your use or inability to use the Service. 
        The app is provided on an "AS IS" and "AS AVAILABLE" basis.
      </p>

      <h2 style={styles.h2}>7. Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of India.
      </p>

      <h2 style={styles.h2}>8. Changes to Terms</h2>
      <p>
        We reserve the right to modify or replace these Terms at any time. 
        By continuing to use the Service after revisions become effective, you agree to be 
        bound by the updated terms.
      </p>

      <div style={styles.contactInfo}>
        <h2 style={{ ...styles.h2, borderLeft: 'none', marginTop: '0' }}>9. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at:</p>
        <p><strong>Email:</strong> ayaazatom@gmail.com</p>
      </div>
    </div>
  );
};

export default Terms;