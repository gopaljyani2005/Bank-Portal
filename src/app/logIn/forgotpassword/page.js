"use client";

import { useState, useEffect } from "react";
import style from "../../style/form.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PasswordReset() {
  const router = useRouter();
  const [accountNumber, setaccountNumber] = useState("");
  const [otp, setotp] = useState("");
  const [sendotp, setsendotp] = useState("");
  const [email, setemail] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");

  const [section1, setsection1] = useState(true);
  const [section2, setsection2] = useState(false);
  const [section3, setsection3] = useState(false);
  async function accountverify(e) {
    e.preventDefault();
    const userData = await fetch(`http://localhost:3000/api/addaccount/${accountNumber}`);
    if (userData.status === 200) {
      const result = await userData.json();
      const e = result["email"];
      setemail(e);
      try {
        const userData = {
          email: e,
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
          setsendotp(responseData.sendotp);
          alert("OTP sent successfully to your email!");
          setsection2(true);
          setsection1(false);
        } 
        else {
          alert("Failed to send OTP. Please try again.");
        }
      } 
      catch (error) {
        console.error("Error sending OTP:", error);
        alert("An error occurred while sending OTP.");
      }
    } 
    else {
      alert("account number not found");
      router.push(`/logIn`);
    }
  }
  async function otpverify(e) {
    e.preventDefault();
    if (otp === sendotp) {
      setsection3(true);
      setsection2(false);
    } 
    else {
      alert("Enter the correct OTP!");
    }
  }

  async function passwordreset(e) {
    e.preventDefault();
    if (password1 === password2) {
      const userData = {
        password: password1,
      };

      const response = await fetch(
        `http://localhost:3000/api/addaccount/${accountNumber}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.status === 200) {
        alert("successfull password updated");
        router.push("/logIn");
      } else {
        alert("password is not updated.Please try again");
        router.push("/logIn/forgotpassword");
      }
    } 
    else {
      alert("password does not match.Try again");
    }
  }
  return (
    <main className={style.page}>
      {section1 && (
        <div>
          <h1>Fogot Password</h1>
          <form className={style.form} onSubmit={accountverify}>
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
            <button type="submit">Verify O.T.P.</button>
          </form>
        </div>
      )}

      {section2 && (
        <div>
          <h1>OTP Verification </h1>
          <form className={style.form} onSubmit={otpverify}>
            <label htmlFor="otp">
            Enter the OTP that has been sent to your registered email ID {email}.
            </label>
            <input
              type="text"
              id="otp"
              name="otp"
              placeholder="xxxxxx"
              required
              value={otp}
              onChange={(e) => setotp(e.target.value)}
            />
            <button type="submit">Set Password</button>
          </form>
        </div>
      )}

      {section3 && (
        <div>
          <h1>Reset Password</h1>
          <form className={style.form} onSubmit={passwordreset}>
            <label htmlFor="password1">new password</label>
            <input
              type="text"
              id="password1"
              name="password1"
              placeholder="xxxxxx"
              required
              value={password1}
              onChange={(e) => setpassword1(e.target.value)}
            />
            <label htmlFor="password2">confirm password</label>
            <input
              type="text"
              id="password2"
              name="password2"
              placeholder="xxxxxx"
              required
              value={password2}
              onChange={(e) => setpassword2(e.target.value)}
            />
            <button type="submit">Update Password</button>
          </form>
        </div>
      )}
    </main>
  );
}
