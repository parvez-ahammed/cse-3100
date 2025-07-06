import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleSearch = () => {
    // Navigate to home with search params
    const params = new URLSearchParams();
    if (searchInput) params.set("name", searchInput);
    if (statusFilter) params.set("status", statusFilter);
    navigate({ pathname: "/", search: params.toString() });
  };

  return (
    <header className={`header ${theme}`}>
      <nav className="navbar navbar-dark bg-gradient px-4 py-3 d-flex align-items-center justify-content-between">
        <div
          className="navbar-title text-gradient fs-3 fw-bold cursor-pointer"
          onClick={() => navigate("/")}
          title="Rick & Morty Explorer Home"
        >
          RICK & MORTY EXPLORER
          <p className="navbar-subtitle text-white-50 fs-6 m-0">
            Explore your favorite characters
          </p>
        </div>
        <ul className="navbar-links list-unstyled d-flex gap-3 mb-0">
          <li>
            <NavLink
              to="/"
              className="btn btn-gradient d-flex align-items-center gap-1 px-3 py-2 rounded"
              activeclassname="active"
              title="Home"
            >
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="btn btn-gradient d-flex align-items-center gap-1 px-3 py-2 rounded"
              activeclassname="active"
              title="About"
            >
              <FaInfoCircle />
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="btn btn-gradient d-flex align-items-center gap-1 px-3 py-2 rounded"
              activeclassname="active"
              title="Contact"
            >
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="navbar-search d-flex align-items-center gap-2">
          <input
            type="text"
            placeholder="Search by name"
            value={searchInput}
            onChange={handleSearchInputChange}
            className="form-control"
            style={{ minWidth: "200px" }}
          />
          <select
            value={statusFilter}
            onChange={handleStatusChange}
            className="form-select"
          >
            <option value="">All Statutes</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          <button className="btn btn-gradient px-4 py-2" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="btn btn-gradient ms-3" onClick={toggleTheme}>
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>
    </header>
  );
}
