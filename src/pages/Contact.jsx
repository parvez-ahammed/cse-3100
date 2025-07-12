import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    // Simple email regex validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="container my-4">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label>Name</label>
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
          <label>Email</label>
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
          <label>Message</label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
        {success && <div className="alert alert-success mt-3">Message sent successfully!</div>}
      </form>
    </div>
  );
}
