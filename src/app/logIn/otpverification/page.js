"use client";
import { useState, useEffect } from "react";
import styles from "../../style/form.module.css";
import { useRouter } from "next/navigation";

export default function OTPVerification() {
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [sendotp, setSendOtp] = useState("");
  const [userData, setuserData] = useState("");

  // data fetching from backend using api
  useEffect(() => {
    async function fetchUserData() {
      const response = await fetch(`/api/cookieData`, {
        method: "GET",
        credentials: "same-origin",
      });
      let result = await response.json();
      setuserData(result.payload);
    }
    fetchUserData();
  }, []);
  const email = userData?.email;

  // function call for sending otp to verify account 
  async function getoptmfunct() {
    try {
      const emailData = {
        email: userData.email,
      };
      const response = await fetch("/api/emailSend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        setSendOtp(responseData.sendotp);
        alert("OTP sent successfully to your email!");
      } else {
        alert("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("An error occurred while sending OTP.");
    }
  }


  // sending otp verification and move next page;
  function handleCheck(e) {
    e.preventDefault();
    sessionStorage.setItem("userData", JSON.stringify(userData));
    if (otp === sendotp) {
      alert("OTP Verified Successfully!");
      router.push("/logIn/otpverification/userfolder");
    } else {
      alert("Incorrect OTP. Please try again.");
    }
  }

  return (
    <main className={styles.page}>
      <h1>OTP Verification</h1>
      <button onClick={getoptmfunct}>Send OTP</button>
      <form className={styles.form} onSubmit={handleCheck}>
        <label htmlFor="otp">
          Enter the OTP sent to your registered email: {email}
        </label>
        <input
          type="text"
          id="otp"
          name="otp"
          placeholder="xxxxxx"
          required
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button type="submit">Verify</button>
      </form>
    </main>
  );
}
