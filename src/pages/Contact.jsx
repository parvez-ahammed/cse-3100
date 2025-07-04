import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Invalid email";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <h2 className="text-center mb-4 fw-bold">Contact Us</h2>

      {submitted && (
        <div className="alert alert-success text-center">
          Message sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label className="form-label fw-semibold">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="form-control rounded-4 p-3"
            value={form.name}
            onChange={handleChange}
            style={{ borderColor: errors.name ? "#dc3545" : "#ced4da" }}
          />
          {errors.name && (
            <div className="text-danger small mt-1">{errors.name}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="form-control rounded-4 p-3"
            value={form.email}
            onChange={handleChange}
            style={{ borderColor: errors.email ? "#dc3545" : "#ced4da" }}
          />
          {errors.email && (
            <div className="text-danger small mt-1">{errors.email}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            className="form-control rounded-4 p-3"
            value={form.message}
            onChange={handleChange}
            style={{ borderColor: errors.message ? "#dc3545" : "#ced4da" }}
          />
          {errors.message && (
            <div className="text-danger small mt-1">{errors.message}</div>
          )}
        </div>

        <div className="text-end">
          <button
            className="btn px-4 py-2"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "999px",
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
