"use client";
import { useRouter } from "next/navigation";

export default function NotFound(req) {
  const router = useRouter();
  const styles = {
    notfound: {
      textAlign: "center",
      marginTop: "100px",
      fontFamily: "Arial, sans-serif",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#0070f3",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "20px",
    },
    buttonHover: {
      backgroundColor: "#005bb5",
    },
    h1:{
        color:'red',
    }
  };

  return (
    <main>
      <div style={styles.notfound}>
        <h1>Page Not Found</h1>
        <button
          onClick={() => router.back()}
          style={styles.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
        >
          Back
        </button>
      </div>
    </main>
  );
}
