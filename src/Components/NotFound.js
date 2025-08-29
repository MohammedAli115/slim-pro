import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "#d2d2d2ff",
        padding: "20px",
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
        alt="Not Found Icon"
        style={{
          width: "150px",
          height: "150px",
          marginBottom: "20px",
        }}
      />
      <h1 style={{ fontSize: "80px", margin: "10px 0", color: "#333" }}>404</h1>
      <p style={{ fontSize: "20px", marginBottom: "30px", color: "#555" }}>
        عذراً! الصفحة التي تبحث عنها غير موجودة.
      </p>
      <Link
        to="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "12px 20px",
          backgroundColor: "#333",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "8px",
          fontWeight: "bold",
        }}
      >
        العودة للرئيسية
      </Link>
    </div>
  );
}
