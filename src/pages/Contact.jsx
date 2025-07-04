import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess("Thank you! Your message has been sent.");
      setForm({ name: "", email: "", message: "" });
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="container my-4">
      <h2>Contact Us</h2>
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <small className="text-danger">{errors.email}</small>}
        </div>

        <div className="mb-3">
          <label>Message</label>
          <textarea
            className="form-control"
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <small className="text-danger">{errors.message}</small>
          )}
        </div>

        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
