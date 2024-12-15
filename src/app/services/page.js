import Link from 'next/link';
import styles from "../style/Services.module.css"; // CSS module for styling

export default function Services() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Bank Management System Services</h1>

      <div className={styles.section}>
        <h2>Account Login</h2>
        <ul className={styles.featureList}>
          <li>View Account Status</li>
          <li>Send Money</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2>Admin Login</h2>
        <ul className={styles.featureList}>
          <li>Create New Account</li>
          <li>Update Account Details</li>
          <li>Check Account Status</li>
          <li>Perform Withdrawal</li>
          <li>Deposit Money</li>
          <li>Delete Account</li>
        </ul>
      </div>
    </main>
  );
}
