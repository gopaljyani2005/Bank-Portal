"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import Link from "next/link";

export default function () {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [sendotp,setsendotp] = useState("");



  async function getotpfunct() {
    try {
      const userData = {
        email: "jyanigopalaram@gmail.com",
      };

      const response = await fetch("/api/emailSend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        setsendotp(responseData.sendotp);
        alert("Password sent successfully to your email jyanigopalaram@gmail.com!");
      } else {
        alert("Failed to send Password. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred while sending OTP.");
    }
  }

  async function cheakfunction(e) {
    e.preventDefault();
    if(password===sendotp){
      // Function to set cookies in the browser
      const setCookie = (name, value, days) => {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Expiration date
      const expires = "expires=" + date.toUTCString();
      document.cookie = `${name}=${value}; ${expires}; path=/; Secure; SameSite=Lax`;
       };

      // Set a cookie when the page is loaded or on some event
      setCookie('adminflag', true, 1); // Cookie expires in 7 days

      router.push('/adminlogIn/adminpage');
    }
    else{
        alert("Enter the correct OTP.!");
    }
  }
  return (
    <main className="admin-page">
      <h1>Admin Login</h1>
      <form className="admin-form" onSubmit={cheakfunction}>
      <label htmlFor="email">Email Id</label>
      <div className="input-container">
          <input
            type="text"
            id="email"
            name="email"
            placeholder="gogi@gmail.com"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          <button type="button" className="inside-button" onClick={getotpfunct}>Send Password</button>
        </div>

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
    </main>
  );
}
