// Import useState for managing form and validation state
import { useState } from "react";
// Import CSS module
import styles from "./Contact.module.css";

// Contact component for the Contact Us page
export default function Contact() {
  // State for form fields
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  // State for validation errors
  const [errors, setErrors] = useState({});
  // State for showing success message
  const [success, setSuccess] = useState(false);

  // Validate form fields and return error messages if any
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email format.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  };

  // Handle input changes and clear relevant errors
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  // Handle form submission, validate, and reset if successful
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      setSuccess(false);
      return;
    }
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Contact Us</h2>
      
      <div className={styles.formCard}>
        {/* Show success message if form is submitted successfully */}
        {success && (
          <div className={styles.successAlert}>
            <div>
              <span className={styles.successIcon}>✓</span>
              Thank you! Your message has been sent. We'll get back to you soon.
            </div>
            <button 
              className="btn-close" 
              onClick={() => setSuccess(false)}
              aria-label="Close"
            ></button>
          </div>
        )}
        
        {/* Contact form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Name field */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="name">Full Name</label>
            <input
              id="name"
              className={`${styles.formControl} ${errors.name ? "is-invalid" : ""}`}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
            {/* Show validation error for name */}
            {errors.name && <div className={styles.invalidFeedback}>{errors.name}</div>}
          </div>
          
          {/* Email field */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="email">Email Address</label>
            <input
              id="email"
              className={`${styles.formControl} ${errors.email ? "is-invalid" : ""}`}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
            {/* Show validation error for email */}
            {errors.email && <div className={styles.invalidFeedback}>{errors.email}</div>}
          </div>
          
          {/* Message field */}
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="message">Message</label>
            <textarea
              id="message"
              className={`${styles.formControl} ${styles.textarea} ${errors.message ? "is-invalid" : ""}`}
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="What would you like to tell us?"
              required
            ></textarea>
            {/* Show validation error for message */}
            {errors.message && <div className={styles.invalidFeedback}>{errors.message}</div>}
          </div>
          
          {/* Submit button */}
          <button className={styles.submitButton} type="submit">
            Send Message
          </button>
        </form>
        
        {/* Contact information */}
        <div className="mt-4 pt-4 border-top">
          <h5 className="mb-3">Other Ways to Reach Us</h5>
          <div className="d-flex flex-column gap-2">
            <div className="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope me-2" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
              <span>support@rickandmorty.com</span>
            </div>
            <div className="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone me-2" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
              </svg>
              <span>(123) 456-7890</span>
            </div>
            <div className="d-flex align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              <span>123 Interdimensional St, Universe C-137</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
