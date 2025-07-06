import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./home.css";

export default function Contact() {
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

      <div className="contact-section">
        <h1 className="display-4 text-center mb-4 contact-title">Contact Us</h1>
        <div className="contact-content">
          <p className="lead text-center mb-4">
            We'd love to hear from you! Reach out with any questions or feedback.
          </p>
          {submitted && <div className="alert alert-success text-center">Message sent successfully!</div>}
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
            <button type="submit" className="btn btn-gradient w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}