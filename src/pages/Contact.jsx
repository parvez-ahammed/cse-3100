import React, { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateFormData = () => {
    const errors = {};
    const nameValue = formData.name.trim();
    if (!nameValue) errors.name = "Name is required";
    else if (nameValue.length < 2) errors.name = "Name must be at least 2 characters";
    else if (nameValue.length > 50) errors.name = "Name is too long";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = formData.email.trim();
    if (!emailValue) errors.email = "Email is required";
    else if (!emailPattern.test(emailValue)) errors.email = "Please enter a valid email address";

    const messageValue = formData.message.trim();
    if (!messageValue) errors.message = "Message is required";
    else if (messageValue.length < 10) errors.message = "Message must be at least 10 characters";
    else if (messageValue.length > 500) errors.message = "Message is too long (max 500 characters)";

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateFormData()) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", message: "" });
    setValidationErrors({});
  };

  const startNewMessage = () => {
    setIsSubmitted(false);
    resetForm();
  };

  const remainingChars = 500 - formData.message.length;
  const isFormValid = Object.keys(validationErrors).length === 0;

  if (isSubmitted) {
    return (
        <div className="contact-container">
          <div className="contact-success-card">
            <div className="success-icon">🎉</div>
            <h2>Message Sent!</h2>
            <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
            <button onClick={startNewMessage} className="new-message-btn">
              Send Another Message
            </button>
          </div>
        </div>
    );
  }

  return (
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-info-side">
            <h1>Contact</h1>
            <p>
              Have a question, suggestion, or just want to say hi? Fill out the form or reach me directly!
            </p>
            <div className="contact-details-list">
              <div className="contact-detail">
                <span className="icon">📧</span>
                <a href="mailto:adelzahid.cse@gmail.com">adelzahid.cse@gmail.com</a>
              </div>
              <div className="contact-detail">
                <span className="icon">🏫</span>
                <span>Ahsanullah University of Science and Technology</span>
              </div>
              <div className="contact-detail">
                <span className="icon">🆔</span>
                <span>ID: 20220204057</span>
              </div>
              <div className="contact-detail">
                <span className="icon">⏱️</span>
                <span>Typical reply: 1-2 days</span>
              </div>
            </div>
            <div className="dev-credit-box">
              <div className="dev-avatar-large">A</div>
              <div>
                <div className="dev-name">Adel Mohammad Zahid</div>
                <div className="dev-role">CSE Student, 3rd Year, 1st Semester</div>
                <div className="dev-university">AUST</div>
              </div>
            </div>
          </div>
          <form className="contact-form-side" onSubmit={handleFormSubmit}>
            <h2>Send a Message</h2>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={validationErrors.name ? "error" : ""}
                  placeholder="Your name"
                  maxLength="50"
              />
              {validationErrors.name && (
                  <span className="error-message">{validationErrors.name}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={validationErrors.email ? "error" : ""}
                  placeholder="Your email"
              />
              {validationErrors.email && (
                  <span className="error-message">{validationErrors.email}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={validationErrors.message ? "error" : ""}
                  placeholder="Type your message..."
                  rows="5"
                  maxLength="500"
              />
              {validationErrors.message && (
                  <span className="error-message">{validationErrors.message}</span>
              )}
              <div className="character-count">
                {formData.message.length}/500
                {remainingChars < 50 && (
                    <span className="warning"> ({remainingChars} left)</span>
                )}
              </div>
            </div>
            <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting || !isFormValid}
            >
              {isSubmitting ? (
                  <>
                    <span className="spinner"></span> Sending...
                  </>
              ) : (
                  "Send"
              )}
            </button>
          </form>
        </div>
      </div>
  );
};

export default Contact;