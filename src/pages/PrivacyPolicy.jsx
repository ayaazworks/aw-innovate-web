import React from 'react';

const PrivacyPolicy = () => {
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: '1.6',
      color: '#333',
      maxWidth: '800px',
      margin: '40px auto',
      padding: '20px',
      backgroundColor: '#ffffff',
    },
    h1: {
      color: '#2c3e50',
      borderBottom: '2px solid #3498db',
      paddingBottom: '10px',
      fontSize: '22pt',
      marginBottom: '20px',
    },
    h2: {
      color: '#2980b9',
      fontSize: '16pt',
      marginTop: '25px',
      borderLeft: '5px solid #3498db',
      paddingLeft: '10px',
      marginBottom: '15px',
    },
    effectiveDate: {
      fontStyle: 'italic',
      color: '#7f8c8d',
      marginBottom: '30px',
    },
    contactInfo: {
      backgroundColor: '#f9f9f9',
      padding: '15px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      marginTop: '30px',
    },
    list: {
      paddingLeft: '20px',
    },
    listItem: {
      marginBottom: '8px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Privacy Policy</h1>
      <p style={styles.effectiveDate}>Last Updated: May 04 2026</p>

      <section>
        <h2 style={styles.h2}>1. Introduction</h2>
        <p>
          Mohd Ayaaz Siddiqui built the <strong>Indian Charades: Word Party Game</strong> app as an Ad-supported app[cite: 3]. 
          This SERVICE is provided by Mohd Ayaaz Siddiqui at no cost and is intended for use as is[cite: 3].
        </p>
        <p>
          This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information 
          if anyone decided to use our Service[cite: 3]. If you choose to use our Service, then you agree to the collection and use of 
          information in relation to this policy[cite: 3].
        </p>
      </section>

      <section>
        <h2 style={styles.h2}>2. Information Collection and Use</h2>
        <p>
          For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information[cite: 3]. 
          However, this app itself does not collect or store any personal data from its users directly[cite: 3].
        </p>
      </section>

      <section>
        <h2 style={styles.h2}>2.1 Third-Party Services</h2>
        <p>The app does use third-party services that may collect information used to identify you[cite: 3]. These include:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Google Play Services:</strong> Used for app functionality and account integration[cite: 3].
          </li>
          <li style={styles.listItem}>
            <strong>AdMob:</strong> Used for advertising[cite: 3]. AdMob may collect your IP address, device identifiers, and information about your interaction with ads to provide personalized advertising and analytics[cite: 3].
          </li>
          <li style={styles.listItem}>
            <strong>Google Play Billing:</strong> If you choose to make In-App Purchases, the transaction is processed securely via the Google Play Billing Library[cite: 3]. We do not collect or store your financial details; all payment processing is handled by Google[cite: 3].
          </li>
        </ul>
      </section>

      <section>
        <h2 style={styles.h2}>3. Log Data</h2>
        <p>
          We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information 
          (through third-party products) on your phone called Log Data[cite: 3]. This Log Data may include information such as your 
          device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when 
          utilizing our Service, the time and date of your use of the Service, and other statistics[cite: 3].
        </p>
      </section>

      <section>
        <h2 style={styles.h2}>4. Cookies</h2>
        <p>
          Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers[cite: 3]. 
          This Service does not use these "cookies" explicitly[cite: 3]. However, the app may use third-party code and libraries 
          (such as AdMob) that use "cookies" to collect information and improve their services[cite: 3].
        </p>
      </section>

      <section>
        <h2 style={styles.h2}>5. Service Providers</h2>
        <p>
          We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, 
          perform Service-related services, or assist us in analyzing how our Service is used[cite: 3].
        </p>
      </section>

      <section>
        <h2 style={styles.h2}>6. Security</h2>
        <p>
          We value your trust in providing us your Personal Information, thus we strive to use commercially acceptable means of protecting it[cite: 3]. 
          But remember that no method of transmission over the internet, or method of electronic storage is 100% secure, and we cannot guarantee its absolute security[cite: 3].
        </p>
      </section>

      <section>
        <h2 style={styles.h2}>7. Links to Other Sites</h2>
        <p>
          This Service may contain links to other sites (via Ads)[cite: 3]. If you click on a third-party link, you will be directed to that site[cite: 3]. 
          Note that these external sites are not operated by us; therefore, we strongly advise you to review the Privacy Policy of these websites[cite: 3].
        </p>
      </section>

      <section>
        <h2 style={styles.h2}>8. Children's Privacy</h2>
        <p>
          These Services do not address anyone under the age of 13[cite: 3]. We do not knowingly collect personally identifiable information from children under 13[cite: 3]. 
          If we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers[cite: 3].
        </p>
      </section>

      <section>
        <h2 style={styles.h2}>9. Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time[cite: 3]. You are advised to review this page periodically for any changes[cite: 3]. 
          We will notify you of any changes by posting the new Privacy Policy on this page[cite: 3].
        </p>
      </section>

      <div style={styles.contactInfo}>
        <h2 style={{ ...styles.h2, borderLeft: 'none', marginTop: '0' }}>10. Contact Us</h2>
        <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:</p>
        <p><strong>Email:</strong> ayaazatom@gmail.com[cite: 3]</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;