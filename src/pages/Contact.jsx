import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setSuccess(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSuccess(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className="container my-5 contact-form-wrapper"
      style={{ maxWidth: 700 }}
    >
      <h2 className="contact-title mb-4">📬 Get in Touch</h2>

      {success && (
        <div className="success-message mb-4">
          🎉 Your message has been sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group mb-4">
          <label className="floating-label">Name</label>
          <input
            className={`fancy-input ${errors.name ? "input-error" : ""}`}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div className="form-group mb-4">
          <label className="floating-label">Email</label>
          <input
            className={`fancy-input ${errors.email ? "input-error" : ""}`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="form-group mb-4">
          <label className="floating-label">Message</label>
          <textarea
            className={`fancy-input ${errors.message ? "input-error" : ""}`}
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write your message"
          ></textarea>
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <button className="fancy-button" type="submit">
          🚀 Send Message
        </button>
      </form>
    </div>
  );
}
