import { Link, useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header.css";

export default function Navigation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [localNameFilter, setLocalNameFilter] = useState(() => {
    return searchParams.get("name") || localStorage.getItem("nameFilter") || "";
  });

  const [localStatusFilter, setLocalStatusFilter] = useState(() => {
    return searchParams.get("status") || localStorage.getItem("statusFilter") || "";
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const handleSearchClick = () => {
    const params = new URLSearchParams();

    if (localNameFilter) {
      params.set("name", localNameFilter);
      localStorage.setItem("nameFilter", localNameFilter);
    } else {
      localStorage.removeItem("nameFilter");
    }

    if (localStatusFilter) {
      params.set("status", localStatusFilter);
      localStorage.setItem("statusFilter", localStatusFilter);
    } else {
      localStorage.removeItem("statusFilter");
    }

    params.set("page", "1");

    navigate(`/?${params.toString()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleClearSearch = () => {
    setLocalNameFilter("");
    setLocalStatusFilter("");
    localStorage.removeItem("nameFilter");
    localStorage.removeItem("statusFilter");

    navigate("/");
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Rick & Morty Explorer</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <div className="navbar-nav">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <div className="d-flex my-2 my-lg-0 search-filter-navbar">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search by name..."
              value={localNameFilter}
              onChange={(e) => setLocalNameFilter(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <select
              className="form-select me-2"
              value={localStatusFilter}
              onChange={(e) => setLocalStatusFilter(e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
            <button className="btn btn-primary me-2" onClick={handleSearchClick}>
              Search
            </button>
            {(localNameFilter || localStatusFilter) && (
              <button
                className="btn btn-outline-secondary"
                onClick={handleClearSearch}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="dark-mode-wrapper ms-2">
          <button
            onClick={toggleDarkMode}
            className="btn btn-sm btn-outline-light"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}
