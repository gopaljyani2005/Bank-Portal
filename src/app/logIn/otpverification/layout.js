"use client";

import { useRouter } from "next/navigation";
import styles from "../../style/sublayout.module.css";

export default function Logout({ children }) {
    const router = useRouter();
    async function logoutfunct() {
        const response = await fetch(`/api/userlogout`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
        });
        if (response.status === 200) {
            router.push('/logIn');
        }
    }
    return (
        <main className={styles.mainStyle}>
            <button className={styles.buttonStyle} onClick={logoutfunct}>
                Logout
            </button>
            {children}
        </main>
    );
}

const mainStyle = {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: '40px',
};

const buttonStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

buttonStyle.hover = {
    backgroundColor: "#0056b3",
};
