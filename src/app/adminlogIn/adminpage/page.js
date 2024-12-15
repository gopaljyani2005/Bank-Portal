"use client";
import { useRouter } from "next/navigation";
import "../../style/adminpage.css";
import { useState } from "react";
import Accountdetail from "@/app/adminlogIn/adminpage/Accountdetail/page";

export default function adminpage(){
    const router = useRouter();
    function createfunct(){
        router.push(`/adminlogIn/adminpage/createaccount`);
    }

    function updatefunct(){
        router.push('/adminlogIn/adminpage/updateAccountDetail');
    }

    function deletefunct(){
        router.push('/adminlogIn/adminpage/deleteaccount');
    }

    function withdrawalfunct(){
        console.log("insider the withdrawal function");
    }

    function depositfunct(){
        router.push(`/adminlogIn/adminpage/Accountdetail`);
    }

    function detailfunct(){
        router.push(`/adminlogIn/adminpage/Accountdetail`);
    }
    return (
        <main className="adminpage">
                <div className="btn">
                <button onClick={createfunct}>New Account Create</button>
                <button onClick={updatefunct}>Update account details</button>
                <button onClick={deletefunct}>Close account</button>
                <button onClick={detailfunct}>Account detail</button>
                <button onClick={withdrawalfunct}>Withdrawal</button>
                <button onClick={depositfunct}>depositing </button>
            </div>
                
            
        </main>
    )
}