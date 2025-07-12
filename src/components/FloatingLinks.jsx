import { Link } from "react-router-dom";

export default function FloatingLinks() {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        zIndex: 1000,
      }}
    >
      <Link className="btn btn-outline-secondary" to="/about">About Us</Link>
      <Link className="btn btn-outline-secondary" to="/contact">Contact</Link>
    </div>
  );
}
