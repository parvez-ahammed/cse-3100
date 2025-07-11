import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <label>
          Name
          <input
            type="text"
            name="name"
            className={errors.name ? "error-input" : ""}
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            className={errors.email ? "error-input" : ""}
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </label>

        <label>
          Message
          <textarea
            name="message"
            rows="5"
            className={errors.message ? "error-input" : ""}
            value={formData.message}
            onChange={handleChange}
            placeholder="What's on your mind?"
          ></textarea>
          {errors.message && <span className="error-text">{errors.message}</span>}
        </label>

        <button type="submit" className="submit-btn">Send Message</button>
        {submitted && <p className="success-message">Thank you! Your message has been sent.</p>}
      </form>
    </div>
  );
}
