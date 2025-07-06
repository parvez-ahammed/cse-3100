import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./home.css";

export default function About() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    newErrors.name = formData.name.trim() ? "" : "Name is required";
    newErrors.email = formData.email.trim() ? "" : "Email is required";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    newErrors.message = formData.message.trim() ? "" : "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.values(validationErrors).some((error) => error)) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={`home-container ${theme}`}>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
        </ul>
      </nav>

      <div className="about-section">
        <h1 className="display-4 text-center mb-4 about-title">About Rick & Morty Explorer</h1>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">
              Welcome to Rick & Morty Explorer, a dynamic React application built for the CSE-3100 course. This web app allows you to dive into the multiverse of Rick and Morty, exploring a vast array of characters with ease.
            </p>
            <h3 className="mt-4">Key Features:</h3>
            <ul className="feature-list">
              <li><strong>Character Exploration:</strong> Browse detailed profiles with images, status, species, origin, and more.</li>
              <li><strong>Search & Filter:</strong> Find characters by name or filter by status (Alive, Dead, Unknown).</li>
              <li><strong>Pagination:</strong> Navigate through pages with 10 characters each.</li>
              <li><strong>Theme Toggle:</strong> Switch between light and dark modes for a personalized experience.</li>
              <li><strong>Responsive Design:</strong> Optimized for desktops, tablets, and mobiles.</li>
            </ul>
            <p className="mt-4">
              Developed by [Sourav Deb], this project showcases modern web development techniques using React, API integration, and custom styling. Favorite Quote: "Wubba Lubba Dub Dub!" - Rick Sanchez.
            </p>
          </div>
          <div className="application-form">
            <h3 className="text-center mb-3">Apply to Join Our Team</h3>
            {submitted && <div className="alert alert-success text-center">Application submitted successfully!</div>}
            <form onSubmit={handleSubmit} className="form-container">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className={`form-control ${errors.message ? "is-invalid" : ""}`}
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>
              <button type="submit" className="btn btn-gradient w-100">Submit Application</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}