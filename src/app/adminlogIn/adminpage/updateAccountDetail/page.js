"use client";

import { useState } from "react";
import styles from "../../../style/form.module.css";
import { useRouter } from "next/navigation";

export default function updateAccountDetail(){
    const router = new useRouter();
    const [userData,setUserData] = useState("");
    const [section1,setsection1] = useState(true);
    const [section2,setsection2] = useState(false);
    const [email,setEmail] = useState("");
    const [name ,setName] = useState("");
    const [dob,setDob] = useState("");
    const [aadhaarNumber,setAadhaarNumber] = useState("");
    const [mobileNumber,setMobileNumber] = useState("");
    const [accountNumber,setaccountNumber] = useState("");

    async function getdata(e) {
        e.preventDefault();
        const data = await fetch(
          `http://localhost:3000/api/addaccount/${accountNumber}`
        );
        if (data.status === 200) {
          const userdata = await data.json();
          setUserData(userdata);
          setsection2(true);
          setsection1(false);
        } else {
          alert("Account not found!");
        }
      }

    async function updatefunction(e){
        e.preventDefault();
        const userupdateData = {
            email:email,
            name:name,
            dob:dob,
            aadhaarNumber:aadhaarNumber,
            mobileNumber:mobileNumber,
          };
    
          const response = await fetch(
            `http://localhost:3000/api/addaccount/${accountNumber}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userupdateData),
            }
          );
          if (response.status === 200) {
            alert("successfull updated");
            router.push("/adminlogIn/adminpage");
          } else {
            alert("Detail is not updated.Please try again");
          }
    }  
    return (
        <main>
            {section1 && (
        <div className={styles.page}>
          <h1>Account Update Portal</h1>
          <form className={styles.form} onSubmit={getdata}>
            <label htmlFor="accountNumber">Account Number</label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              placeholder="xxxxxxxxxxxx"
              required
              value={accountNumber}
              onChange={(e) => setaccountNumber(e.target.value)}
            />
            <button type="submit">Fill Update Details</button>
          </form>
        </div>
      )}

      {
        section2 && (
            <div className={styles.page}>
            <h1>Account Update Portal</h1>
            <form className={styles.form} onSubmit={updatefunction}>
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
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
        </div>
        )
      }
        </main>
    )
}