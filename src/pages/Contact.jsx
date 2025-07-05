// src/pages/Contact.jsx (MODIFIED: Added background useEffect)

import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    // Add the class to the body when the component mounts
    document.body.classList.add("contact-background");

    // Cleanup function: remove the class when the component unmounts
    return () => {
      document.body.classList.remove("contact-background");
    };
  }, []); // Empty array ensures this effect runs once on mount/unmount

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your message!");
    event.target.reset();
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        Have a question or want to say hello? Drop us a line below.
      </p>

      <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
