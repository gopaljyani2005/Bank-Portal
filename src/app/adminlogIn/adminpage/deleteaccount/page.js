"use client";
import { useState } from "react";
import styles from "../../../style/form.module.css";
import secstyles from "../../../style/deleteaccount.module.css";
import Link from "next/link";

export default function deleteacount() {
  const [accountNumber, setaccountNumber] = useState("");
  const [section1, setsection1] = useState(true);
  const [section2, setsection2] = useState(false);
  const [message,setmessage] = useState("");
  async function deleteacount(e) {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/api/addaccount/${accountNumber}`,
      {
        method: "DELETE",
      }
    );
    const result = await response.json();
    setmessage(result.message);
    setsection1(false);
    setsection2(true);
  }
  return (
    <main>
      {section1 && (
        <div className={styles.page}>
        <h1>Account Delete Portal</h1>
        <form className={styles.form} onSubmit={deleteacount}>
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            placeholder="xxxxxxxxxxxx"
            required
            value={accountNumber}
            onChange={(e) => setaccountNumber(e.target.value)}
          />
          <button type="submit">Delete</button>
        </form>
      </div>
      )}

      {section2 && (
        <div className={secstyles.info}>
          <p>{message}</p>
          <Link href="/adminlogIn/adminpage" className="link">Dashboard</Link>
        </div>
      )}
    </main>
  );
}
