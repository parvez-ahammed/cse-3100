import { NavLink } from "react-router-dom";
import "./BottomNavBar.css";

export default function BottomNavBar() {
  return (
    <nav className="bottom-nav-bar">
      <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        About
      </NavLink>
      <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Home
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Contact
      </NavLink>
    </nav>
  );
}
