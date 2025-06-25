import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react"; 
import "./header.css";

export default function Navigation() {
  const [searchParams, setSearchParams] = useSearchParams();

  
  const [localNameFilter, setLocalNameFilter] = useState(searchParams.get("name") || "");
  const [localStatusFilter, setLocalStatusFilter] = useState(searchParams.get("status") || "");

  
  useEffect(() => {
    setLocalNameFilter(searchParams.get("name") || "");
    setLocalStatusFilter(searchParams.get("status") || "");
  }, [searchParams]); 
  const handleNameInputChange = (e) => {
    setLocalNameFilter(e.target.value); 
  };

  const handleStatusSelectChange = (e) => {
    setLocalStatusFilter(e.target.value); 
  };

  const handleSearchClick = () => {
    const newSearchParams = new URLSearchParams(searchParams);

    if (localNameFilter) {
      newSearchParams.set("name", localNameFilter);
    } else {
      newSearchParams.delete("name");
    }

    if (localStatusFilter) {
      newSearchParams.set("status", localStatusFilter);
    } else {
      newSearchParams.delete("status");
    }

    newSearchParams.delete("page"); 
    setSearchParams(newSearchParams);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
              className="btn btn-primary custom-search-button" 
              onClick={handleSearchClick} 
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}






