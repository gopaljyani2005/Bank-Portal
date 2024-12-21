"use client";
import "./style.css";
import { useState,useEffect } from "react";
export default function userdetail() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchUserData(){
      let response = await fetch(`/api/cookieData`, {
        method: "GET",
        credentials: "same-origin",
      });
      const result = await response.json();
      const account_number = result.payload.accountNumber;
      const data = await fetch(`/api/addaccount/${account_number}`);
      if (data.status === 200) {
        const userdata = await data.json();
        setUserData(userdata);
      }
    }
    fetchUserData();
  }, []);
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
