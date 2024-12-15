"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 

import styles from "../style/form.module.css";
import Link from "next/link";
export default function (request) {
    const router = useRouter();
    const [accountNumber,setaccountNumber] = useState("");
    const [password,setpassword] = useState("");

    async function cheakfunction(e){
        e.preventDefault();
        const data = await fetch(`http://localhost:3000/api/addaccount/${accountNumber}`);
        if (data.status === 200) {
            const userdata = await data.json();
            const sentdata = new URLSearchParams(userdata).toString();
            sessionStorage.setItem('userData', JSON.stringify(userdata));
            router.push(`/logIn/otpverification`);
          }
        else{
            router.push('/usernotfind');
        }  
        
    }
  return (
    <main className={styles.page}>
        <h1>Login</h1>
      <form className={styles.form} onSubmit={cheakfunction}>
        
        <label htmlFor="Account Number">Account Number</label>
        <input
          type="text"
          id="account"
          name="account"
          placeholder="xxxxxxxxxxxx"
          required
          value={accountNumber}
          onChange={(e) => setaccountNumber(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="xxxxxx"
          required
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <div className="forgot-password">
        <Link href="/logIn/forgotpassword">Forgot Password</Link>
      </div>
    </main>
  );
}
