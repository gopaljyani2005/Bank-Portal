import styles from "../style/About.module.css"; // CSS module for styling

export default function About() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>About Us</h1>

      <section className={styles.section}>
        <h2>Welcome to Our Bank Management System</h2>
        <p>
          Our Bank Management System is designed to provide seamless and efficient banking services to both account holders and administrators. 
          We aim to enhance user experience by integrating modern technology with traditional banking systems.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Features</h2>
        <ul className={styles.featureList}>
          <li>Account Login for viewing account status and sending money.</li>
          <li>Admin Login for managing accounts and transactions.</li>
          <li>Secure and user-friendly interface.</li>
          <li>Real-time transaction updates and notifications.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Our Mission</h2>
        <p>
          We are committed to delivering a secure, efficient, and innovative banking experience to our users.
          Our goal is to simplify banking operations for customers and administrators alike.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Contact Us</h2>
        <p>
          For support or inquiries, please reach out to us:
        </p>
        <p>
          <strong>Email:</strong> b22me075@iij.ac.in<br />
          <strong>Phone:</strong> 9571356823<br />
          <strong>Address:</strong> 123 Finance Street, City, State, 12345
        </p>
      </section>
    </main>
  );
}
