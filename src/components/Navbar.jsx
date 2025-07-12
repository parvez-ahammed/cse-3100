import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg mb-4"
      style={{
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        boxShadow: "0 0 20px #00ffe0",
        borderBottom: "2px solid #00ffe0",
      }}
    >
      <div className="container" style={{ maxWidth: "960px" }}>
        <Link
          className="navbar-brand"
          to="/"
          style={{
            color: "#00ffe0",
            fontSize: "2rem",
            fontWeight: "700",
            textShadow: "0 0 10px #00ffe0",
          }}
        >
          Rick & Morty Explorer
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{
                  color: "#00ffe0",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  textShadow: "0 0 5px #00ffe0",
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{
                  color: "#00ffe0",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  textShadow: "0 0 5px #00ffe0",
                }}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                style={{
                  color: "#00ffe0",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  textShadow: "0 0 5px #00ffe0",
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
