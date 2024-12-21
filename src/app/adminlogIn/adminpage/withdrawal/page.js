"use client";
import { useState } from "react";
import styles from "../../../style/form.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function deposit() {
  const router = useRouter();
  const [accountNumber, setaccountNumber] = useState("");
  const [amount, setamount] = useState("");
  const [section1, setsection1] = useState(true);
  const [section2, setsection2] = useState(false);
  const [section3, setsection3] = useState(false);
  let [userdata, setuserdata] = useState("");

  async function usercheak(e) {
    e.preventDefault();
    let response = await fetch(`/api/addaccount/${accountNumber}`);
    if (response.status === 200) {
      setuserdata(await response.json());
      setsection1(false);
      setsection2(true);
    } else {
      setaccountNumber("");
      alert("please give me correct account number!please try again");
    }
  }

  async function Withdrawalmoney(e) {
    e.preventDefault();
    const balance = Number(userdata["balance"]) -Number(amount);
    const userupdateData = {
      balance: balance.toString(),
    };
    const response = await fetch(`/api/addaccount/${accountNumber}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userupdateData),
    });
    setuserdata(await response.json());

    if (response.status == 200) {
      setsection2(false);
      setsection3(true);
    } else {
      alert("Withdrawal error");
      router.push("/adminlogIn/adminpage");
    }
  }

  return (
    <main>
      {section1 && (
        <div className={styles.page}>
          <h1>Money Withdrawal Portal</h1>
          <form className={styles.form} onSubmit={usercheak}>
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
            <button type="submit">Next</button>
          </form>
        </div>
      )}

      {section2 && (
        <div className={styles.page}>
          <h2>Account Holder Name</h2>
          <h3>{userdata["name"]}</h3>
          <form className={styles.form} onSubmit={Withdrawalmoney}>
            <label htmlFor="amount">Amount</label>
            <input
              type="Number"
              id="amount"
              name="amount"
              placeholder="5555"
              required
              value={amount}
              onChange={(e) => setamount(e.target.value)}
            />
            <button type="submit">Withdrawal</button>
          </form>
        </div>
      )}
      {section3 && (
        <div>
          <h1>Successfully Withdrawal Your money</h1>
          <h3>Current Payment :-{userdata.balance}</h3>
          <Link href="/adminlogIn/adminpage">Dashboard</Link>
        </div>
      )}
    </main>
  );
}
