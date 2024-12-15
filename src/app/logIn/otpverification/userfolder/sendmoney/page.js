"use client";
import { useRouter } from "next/navigation";
import "./style.css";
import styles from "../../../../style/successfullPay.module.css"
import styles1 from "../../../../style/form.module.css";
import { useState, useEffect } from "react";
import { toWords } from "number-to-words";


export default function addBalance() {
  const router = useRouter();
  const [reciveraccountNumber, setreciveraccountNumber] = useState("");
  const [payment, setpayment] = useState("");
  const [userData, setUserData] = useState("");
  const [section1 ,setsection1] = useState(true);
  const [section2 ,setsection2] = useState(false);
  let [sendpayment,setsendpayment] = useState("");
  const [sendpaymentInhindi,setsendpaymentInhindi] = useState("");
  const [reciverData,setreciverData] = useState("");
  const [senderData,setsenderData] = useState("");

  useEffect(() => {
    const storedData = sessionStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const senderAccountNumber = userData?.accountNumber;

  async function sendmoney(e) {
    e.preventDefault();
    let senderresponse = await fetch(
      `http://localhost:3000/api/addaccount/${senderAccountNumber}`
    );
    setsenderData(await senderresponse.json());
    const reciverDatapro = await fetch(
      `http://localhost:3000/api/addaccount/${reciveraccountNumber}`
    );
    setreciverData(await reciverDatapro.json());

    const senderpayment = Number(senderData["balance"]);
    setsendpayment(Number(payment));
    sendpayment = Number(payment);
    setsendpaymentInhindi(toWords(sendpayment));
    
    
    if (senderpayment >= sendpayment) {
      if (reciverDatapro.status==200) {
        const reciverpayment = Number(reciverData["balance"]);
        const updatedata = {
          senderBalance: senderpayment - sendpayment,
          senderAccountNumber: senderAccountNumber,
          reciverBalance: reciverpayment + sendpayment,
          reciveraccountNumber: reciveraccountNumber,
        };

        const response = await fetch(
          "http://localhost:3000/api/TransactionApi",
          {
            method: "PUT",
            headers: {
              contentType: "application/json",
            },
            body: JSON.stringify(updatedata),
          }
        );
        if (response.status === 200) {
          alert("payment successfully transferred");
          setsection1(false);
          setsection2(true);

        } else {
          alert("error in transer!. Please try again");
        }
      } else {
        alert("Reciver is Not Found!");
        router.push('/logIn/otpverification/userfolder');
      }
    } else {
      alert("insufficient amount!");
    }
  }
  function payagain(){
    setsection1(true);
    setsection2(false);
    setpayment("");
  }
  return (
    <main className="page">
      {
        section1 && (
          <div>
            <h1>Send Money Portal</h1>
      <form className={styles1.form} onSubmit={sendmoney}>
        <label htmlFor="Account Number">Account Number of Reciver</label>
        <input
          type="text"
          id="account"
          name="account"
          placeholder="xxxxxxxxxxxx"
          required
          value={reciveraccountNumber}
          onChange={(e) => setreciveraccountNumber(e.target.value)}
        />

        <label htmlFor="Money">Enter Payment</label>
        <input
          type="text"
          id="money"
          name="money"
          placeholder="5555"
          required
          value={payment}
          onChange={(e) => setpayment(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
          </div>
        )
      }


      {
        section2 && (
          <div className={styles.successfulPay}>
      <div className={styles.column}>
        <h4 className={styles.amountTitle}>Amount</h4>
        <h1 className={styles.amount}>₹ {sendpayment}.00</h1>
        <h6 className={styles.amountDescription}>{sendpaymentInhindi}</h6>
      </div>
      <div className={styles.column}>
        <h6 className={styles.nameTitle}>To</h6>
        <h4 className={styles.name}>{reciverData.name}</h4>
        <h6 className={styles.accountNumber}>{reciverData.accountNumber}</h6>
        <h6 className={styles.nameTitle}>Account</h6>
        <button type="button" onClick={payagain}>Pay Again</button>
      </div>

      <div className={styles.column}>
        <h6 className={styles.nameTitle}>From</h6>
        <h4 className={styles.name}>{senderData.name}</h4>
        <h6 className={styles.accountNumber}>{senderAccountNumber}</h6>
        <h6 className={styles.nameTitle}>Bank Name</h6>
      </div>
    </div>
        )
      }
    </main>
  );
}
