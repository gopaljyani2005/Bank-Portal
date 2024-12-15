"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 
import styles from "../../../style/form.module.css"

export default function SignIn() {
  const router = useRouter();
    const account_number = Math.floor(100000000000 + Math.random() * 10000000000 + Math.random() * 9999999).toString();
    const password = Math.floor(100000 + Math.random() * 96588).toString();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [dob, setDob] = useState("");
    const [aadhaarNumber, setAadhaarNumber] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    
    async function saveFunction(e) {
        e.preventDefault();
        const userData = {
            accountNumber: account_number,
            password: password,
            email: email,
            dob: dob,
            aadhaarNumber: aadhaarNumber,
            mobileNumber: mobileNumber,
            balance: 0,
            name:name,
        };

        const response = await fetch('http://localhost:3000/api/addaccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (response.status === 200) {
            try {
                const response = await fetch("http://localhost:3000/api/sendmailaccountdetail", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(userData),
                });
          
                if (response.status === 200) {
                  const responseData = await response.json();
                  alert("A/C and Password sent successfully to your email!");
                  router.push(`/adminlogIn/adminpage`)
                } else {
                  alert("Failed to send OTP. Please try again.");
                }
              } catch (error) {
                console.error("Error sending OTP:", error);
                alert("An error occurred while sending OTP.");
              }
        }
    }

    return (
        <main className={styles.page}>
            <h1>Create Account</h1>
            <form className={styles.form} onSubmit={saveFunction}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="xxx@gmail.com" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />

                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Atliya" 
                    required 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />

                <label htmlFor="dob">Date of Birth</label>
                <input 
                    type="date" 
                    id="dob" 
                    name="dob" 
                    required 
                    value={dob} 
                    onChange={(e) => setDob(e.target.value)} 
                />

                <label htmlFor="aadhaar">Aadhaar Number</label>
                <input 
                    type="text" 
                    id="aadhaar" 
                    name="aadhaar" 
                    placeholder="xxxx xxxx xxxx" 
                    required 
                    value={aadhaarNumber} 
                    onChange={(e) => setAadhaarNumber(e.target.value)} 
                />

                <label htmlFor="mobile">Mobile Number</label>
                <input 
                    type="text" 
                    id="mobile" 
                    name="mobile" 
                    placeholder="xxxxxxxxxx" 
                    required 
                    value={mobileNumber} 
                    onChange={(e) => setMobileNumber(e.target.value)} 
                />

                <button type="submit">Submit</button>
            </form>
        </main>
    );
}
