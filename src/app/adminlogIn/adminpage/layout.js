"use client";
import { useRouter } from "next/navigation";
import styles from "../../style/sublayout.module.css"
export default function Logout({ children }) {
    const router = useRouter();
    async function logoutfunct() {
        const response = await fetch(`/api/adminlogout`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
        });
        if (response.status === 200) {
            router.push('/adminlogIn');
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

