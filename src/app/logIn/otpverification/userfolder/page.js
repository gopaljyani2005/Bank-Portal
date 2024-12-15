"use client";

import Link from "next/link";
import "./styles.css"
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react"; 
export default function userdetail() {
  const router = useRouter();
  const [userData, setUserData] = useState("");

    useEffect(() => {
      // Retrieve data from sessionStorage
      const storedData = sessionStorage.getItem("userData");
      if (storedData) {
        setUserData(JSON.parse(storedData));
      }
    }, []);
    

  function funct1(){
    router.push(`/logIn/otpverification/userfolder/userdetail`)
  }
  function funct2(){
    router.push(`/logIn/otpverification/userfolder/sendmoney`)
  }
  
  
  return (
    <div className="form">
      <button onClick={funct1} className="btn">Account</button>
      <button onClick={funct2} className="btn">Pay</button>
      
    </div>
  );
}
