"use client";
import { useState, useEffect } from "react";
import styles from "../../style/form.module.css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [sendotp, setSendOtp] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();

  const [userData, setUserData] = useState("");

  useEffect(() => {
    // Retrieve data from sessionStorage
    const storedData = sessionStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const email = userData?.email;
  const accountNumber = userData?.accountNumber;

  async function getoptmfunct() {
    try {
      const userData = {
        email: email,
      };

      const response = await fetch("http://localhost:3000/api/emailSend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
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

  function handleCheck(e) {
    e.preventDefault();
    console.log("Entered OTP:", otp, "Sent OTP:", sendotp);
    sessionStorage.setItem('userData', JSON.stringify(userData));
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
