"use client";
import "./style.css";
import { useState,useEffect } from "react";
export default function userdetail() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve data from sessionStorage
    const storedData = sessionStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);
  console.log(userData);
  return (
    <main>
      <div className="ud">
        <h1>User Detail</h1>
      <table className="table">
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Account Number</td>
          <td>{userData?.accountNumber}</td>
        </tr>
        <tr>
          <td>Password</td>
          <td>{userData?.password}</td>
        </tr>
        <tr>
          <td>Name</td>
          <td>{userData?.name}</td>
        </tr>
        <tr>
          <td>Email Id</td>
          <td>{userData?.email}</td>
        </tr>
        <tr>
          <td>D.O.B</td>
          <td>{userData?.dob}</td>
        </tr>
        <tr>
          <td>Mobile Number</td>
          <td>{userData?.mobileNumber}</td>
        </tr>
        <tr>
          <td>Aadhar Number</td>
          <td>{userData?.aadhaarNumber}</td>
        </tr>
        <tr>
          <td>Balance</td>
          <td>{userData?.balance}</td>
        </tr>
      </tbody>
    </table>
      </div>
    </main>
  );
}
