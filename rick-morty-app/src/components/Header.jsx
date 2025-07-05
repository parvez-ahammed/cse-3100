import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-title">Assignment-1</div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
         <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
