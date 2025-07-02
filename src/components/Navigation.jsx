import { Link, useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header.css";

export default function Navigation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  
  const [localNameFilter, setLocalNameFilter] = useState(() => {
    const nameFromUrl = searchParams.get("name");
    const nameFromLocalStorage = localStorage.getItem("nameFilter");
    return nameFromUrl || nameFromLocalStorage || "";
  });

  const [localStatusFilter, setLocalStatusFilter] = useState(() => {
    const statusFromUrl = searchParams.get("status");
    const statusFromLocalStorage = localStorage.getItem("statusFilter");
    return statusFromUrl || statusFromLocalStorage || "";
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    const nameFromUrl = searchParams.get("name");
    const statusFromUrl = searchParams.get("status");

    if (nameFromUrl !== localNameFilter) {
      setLocalNameFilter(nameFromUrl || "");
    }
    if (statusFromUrl !== localStatusFilter) {
      setLocalStatusFilter(statusFromUrl || "");
    }
  }, [searchParams, localNameFilter, localStatusFilter]);


  const handleNameInputChange = (e) => {
    setLocalNameFilter(e.target.value);
  };

  const handleStatusSelectChange = (e) => {
    setLocalStatusFilter(e.target.value);
  };

  const handleSearchClick = () => {
    const newSearchParams = new URLSearchParams();

    if (localNameFilter) {
      newSearchParams.set("name", localNameFilter);
      localStorage.setItem("nameFilter", localNameFilter);
    } else {
      localStorage.removeItem("nameFilter");
    }

    if (localStatusFilter) {
      newSearchParams.set("status", localStatusFilter);
      localStorage.setItem("statusFilter", localStatusFilter);
    } else {
      localStorage.removeItem("statusFilter");
    }

    if (location.pathname !== "/") {
      navigate(`/?${newSearchParams.toString()}`);
    } else {
      newSearchParams.delete("page"); 
      setSearchParams(newSearchParams);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleClearSearch = () => {
    setLocalNameFilter("");
    setLocalStatusFilter("");
    localStorage.removeItem("nameFilter");
    localStorage.removeItem("statusFilter");

    if (location.pathname === "/") {
      setSearchParams(new URLSearchParams());
    } else {
      navigate("/");
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode));
      document.body.classList.toggle("dark-mode", newMode);
      return newMode;
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Rick & Morty Explorer
        </Link>
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
              className="form-control me-2 custom-search-input"
              placeholder="Search by name..."
              value={localNameFilter}
              onChange={handleNameInputChange}
              onKeyPress={handleKeyPress}
            />
            <select
              className="form-select me-2 custom-filter-select"
              value={localStatusFilter}
              onChange={handleStatusSelectChange}
            >
              <option value="">All Statuses</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
            <button
              className="btn btn-primary custom-search-button me-2"
              onClick={handleSearchClick}
            >
              Search
            </button>
            {(localNameFilter || localStatusFilter) && (
              <button
                className="btn btn-outline-secondary custom-clear-button"
                onClick={handleClearSearch}
                title="Clear search"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        <div className="dark-mode-wrapper">
          <button
            onClick={toggleDarkMode}
            className="dark-mode-toggle"
            title="Toggle Dark Mode"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </nav>
  );
}


