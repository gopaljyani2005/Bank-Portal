import Image from "next/image";
import styles from "./page.module.css";
import st from "./style/Home.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className={st.login}>
        <Link href="/adminlogIn" className={st.btn}>Admin Login</Link>
        <Link href="/logIn" className={st.btn}>Account Login</Link>
      </div>
    </main>
  );
}
