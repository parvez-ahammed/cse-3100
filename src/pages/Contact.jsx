import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    // Simple validation
    if (!name || !email.includes("@") || !message) {
      alert("Please fill out all fields correctly.");
      return;
    }

    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-5" style={{ maxWidth: "700px" }}>
      <h2 className="mb-4 text-success">📬 Contact Us</h2>

      {submitted && (
        <div className="alert alert-success">
          ✅ Your message has been sent successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-sm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label fw-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="form-control rounded-pill px-4 py-2"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="form-control rounded-pill px-4 py-2"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="form-label fw-semibold">Message</label>
          <textarea
            name="message"
            rows="5"
            className="form-control rounded-4 px-4 py-3"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary rounded-pill px-4 w-100">
          ✉️ Send Message
        </button>
      </form>
    </div>
  );
}
