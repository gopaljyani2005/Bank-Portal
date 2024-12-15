"use client";
import { useSearchParams } from "next/navigation";

export default function EmailSent() {
    const searchParams = useSearchParams();
    console.log(searchParams);
    const email = searchParams.get("email");
    const password = searchParams.get("password");
    const accountNumber = searchParams.get("accountNumber");
    function sentmail(){
        console.log("inside the function of mailsent");
    }
    return (
        <main>
            <h1>Email Sent</h1>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Account Number: {accountNumber}</p>
            <button onClick={sentmail}>Click</button>
        </main>
    );
}
