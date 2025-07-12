import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate email with simple regex
  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  // Clear success message after 5 seconds
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  // Clear success message if user starts typing again
  const handleChange = (field, value) => {
    if (success) setSuccess(false);
    setFormData({ ...formData, [field]: value });
  };

  return (
    <main className="container my-5" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">Contact Us</h2>

      {success && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Message sent successfully!
          <button type="button" className="btn-close" onClick={() => setSuccess(false)} aria-label="Close"></button>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-floating mb-3">
          <input
            type="text"
            id="name"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            autoComplete="name"
          />
          <label htmlFor="name">Name *</label>
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="form-floating mb-3">
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            placeholder="name@example.com"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            autoComplete="email"
          />
          <label htmlFor="email">Email *</label>
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="form-floating mb-3">
          <textarea
            id="message"
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            placeholder="Your message here"
            style={{ height: "120px" }}
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
          />
          <label htmlFor="message">Message *</label>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button className="btn btn-primary w-100" type="submit" disabled={success}>
          {success ? "Sent!" : "Submit"}
        </button>
      </form>
    </main>
  );
}
