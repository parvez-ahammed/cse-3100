import { useState } from "react";

export default function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      errs.email = "Email is invalid";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
    setForm({ name: "", email: "", message: "" });
    setErrors({});
  };

  return (
    <div className="container my-4">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div style={{ color: "red", fontSize: "0.95em" }}>{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div style={{ color: "red", fontSize: "0.95em" }}>{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea
            className="form-control"
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <div style={{ color: "red", fontSize: "0.95em" }}>{errors.message}</div>}
        </div>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
      {showToast && (
        <div className="toast-message">
          Message sent successfully!
        </div>
      )}
    </div>
  );
}