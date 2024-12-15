"use client";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

import styles from "../style/form.module.css";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [accountNumber, setAccountNumber] = useState("");
    const [password, setPassword] = useState("");

    async function checkFunction(e) {
        e.preventDefault();

        try {
            const response = await fetch(`/api/addaccount/${accountNumber}`); // Use relative path
            if (response.status === 200) {
                const userData = await response.json();
                sessionStorage.setItem('userData', JSON.stringify(userData));
                router.push(`/logIn/otpverification`);
            } else {
                router.push('/usernotfind');
            }
        } catch (error) {
            console.error("Error during login:", error);
            router.push('/error'); // Redirect to an error page if necessary
        }
    }

    return (
        <main className={styles.page}>
            <h1>Login</h1>
            <form className={styles.form} onSubmit={checkFunction}>
                <label htmlFor="Account Number">Account Number</label>
                <input
                    type="text"
                    id="account"
                    name="account"
                    placeholder="xxxxxxxxxxxx"
                    required
                    value={accountNumber}
                    onChange={(e) => setAccountNumber(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="xxxxxx"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            <div className="forgot-password">
                <Link href="/logIn/forgotpassword">Forgot Password</Link>
            </div>
        </main>
    );
}
