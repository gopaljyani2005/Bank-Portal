"use client";
import { useState } from "react";
import styles from "../../../style/form.module.css";
import tablestyle from "../../../style/table.module.css";
import Link from "next/link";

export default function Accountdetail(request) {
  const [accountNumber, setaccountNumber] = useState("");
  const [section2, setsection2] = useState(false);
  const [section1, setsection1] = useState(true);
  const [userData, setUserData] = useState("");
  async function getdata(e) {
    e.preventDefault();
    const data = await fetch(
      `http://localhost:3000/api/addaccount/${accountNumber}`
    );
    if (data.status === 200) {
      const userdata = await data.json();
      setUserData(userdata);
      setsection2(true);
      setsection1(false);
    } else {
      alert("Account not found!");
    }
  }
  return (
    <main>
      {section1 && (
        <div className={styles.page}>
          <h1>Account Detail Portal</h1>
          <form className={styles.form} onSubmit={getdata}>
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
            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {section2 && (
        <div>
          <h1>User Detail</h1>
          <table className={tablestyle.table}>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Account Number</td>
                <td>{userData.accountNumber}</td>
              </tr>
              <tr>
                <td>Password</td>
                <td>{userData.password}</td>
              </tr>
              <tr>
                <td>Name</td>
                <td>{userData.name}</td>
              </tr>
              <tr>
                <td>Email Id</td>
                <td>{userData.email}</td>
              </tr>
              <tr>
                <td>D.O.B</td>
                <td>{userData.dob}</td>
              </tr>
              <tr>
                <td>Mobile Number</td>
                <td>{userData.mobileNumber}</td>
              </tr>
              <tr>
                <td>Aadhar Number</td>
                <td>{userData.aadhaarNumber}</td>
              </tr>
              <tr>
                <td>Balance</td>
                <td>{userData.balance}</td>
              </tr>
            </tbody>
          </table>
          <Link href="/adminlogIn/adminpage">Dashboard</Link>
        </div>
      )}
    </main>
  );
}
