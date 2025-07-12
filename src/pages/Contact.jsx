import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="container">
      <h2>Contact Us</h2>
      {submitted && <p style={{ color: "green" }}>Thank you! Message sent successfully.</p>}

      <form onSubmit={handleSubmit} noValidate style={{ maxWidth: "600px", margin: "auto" }}>
        {/* Name */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name</label><br />
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email</label><br />
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* Message */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="message">Message</label><br />
          <textarea
            name="message"
            id="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
          {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
        </div>

        {/* Submit */}
        <button type="submit" style={{
          padding: "0.5rem 1.5rem",
          backgroundColor: "#0077ff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Submit
        </button>
      </form>
    </div>
  );
}
