"use client";
import Link from "next/link";
import st from "../../../style/Home.module.css";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState,useEffect } from "react"; 
export default function userdetail() {
  const router = useRouter();
  function funct1(){
    router.push(`/logIn/otpverification/userfolder/userdetail`)
  }
  function funct2(){
    router.push(`/logIn/otpverification/userfolder/sendmoney`)
  }
  
  
  return (
    <div className={st.login}>
      <button onClick={funct1} className={st.btn}>Account</button>
      <button onClick={funct2} className={st.btn}>Pay</button>
      
    </div>
  );
}
