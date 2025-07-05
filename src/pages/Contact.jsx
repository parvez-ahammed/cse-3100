import React, { useState } from "react";

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validationErrors, setValidationErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form validation - could probably move this to a custom hook later
  const validateFormData = () => {
    const errors = {};

    // Name validation
    const nameValue = formData.name.trim();
    if (!nameValue) {
      errors.name = "Name is required";
    } else if (nameValue.length < 2) {
      errors.name = "Name must be at least 2 characters";
    } else if (nameValue.length > 50) {
      errors.name = "Name is too long";
    }

    // Email validation - using a simple regex for now
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValue = formData.email.trim();
    if (!emailValue) {
      errors.email = "Email is required";
    } else if (!emailPattern.test(emailValue)) {
      errors.email = "Please enter a valid email address";
    }

    // Message validation
    const messageValue = formData.message.trim();
    if (!messageValue) {
      errors.message = "Message is required";
    } else if (messageValue.length < 10) {
      errors.message = "Message must be at least 10 characters";
    } else if (messageValue.length > 500) {
      errors.message = "Message is too long (max 500 characters)";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!validateFormData()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - in real app this would go to a backend
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Log for debugging (remove in production)
      console.log("Contact form submitted:", formData);

      setIsSubmitted(true);
      resetForm();
    } catch (error) {
      console.error("Error submitting contact form:", error);
      // In a real app, you'd show an error message to the user
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

  // Success screen
  if (isSubmitted) {
    return (
      <div className="contact-container">
        <div className="success-message">
          <div className="success-icon">✅</div>
          <h2>Thanks for reaching out!</h2>
          <p>
            Your message has been sent successfully. We'll get back to you soon!
          </p>
          <button onClick={startNewMessage} className="new-message-btn">
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  const remainingChars = 500 - formData.message.length;
  const isFormValid = Object.keys(validationErrors).length === 0;

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with the Rick & Morty Explorer team</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            Have questions about the app? Found a bug? Want to suggest a new
            feature? We'd love to hear from you!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">
                {/* Email icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="22,6 12,13 2,6"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <span>support@rickandmortyexplorer.com</span>
            </div>

            <div className="contact-item">
              <span className="icon">
                {/* Website icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M2 12H22"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </span>
              <span>rickandmortyapi.com</span>
            </div>

            <div className="contact-item">
              <span className="icon">
                {/* Clock icon */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <polyline
                    points="12,6 12,12 16,14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>Response time: 24-48 hours</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={validationErrors.name ? "error" : ""}
              placeholder="Enter your full name"
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
              placeholder="Enter your email address"
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
              placeholder="Tell us what's on your mind..."
              rows="6"
              maxLength="500"
            />
            {validationErrors.message && (
              <span className="error-message">{validationErrors.message}</span>
            )}
            <div className="character-count">
              {formData.message.length}/500 characters
              {remainingChars < 50 && (
                <span className="warning"> ({remainingChars} remaining)</span>
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
                <div className="spinner"></div>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Developer Credit Section */}
        <div className="developer-credit">
          <div className="developer-credit-content">
            <h4>💻 Built by Md. Rubayet Islam</h4>
            <p>CSE Student at Ahsanullah University of Science and Technology</p>
            <p>3rd Year, 1st Semester | Student ID: 20220204069</p>
            <p>
              <span className="tech-stack">
                Built with React • Vite • Rick & Morty API
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
