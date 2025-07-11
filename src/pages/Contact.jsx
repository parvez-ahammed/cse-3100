import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email.includes("@") || !formData.message) {
      alert("Please fill all fields correctly.");
      return;
    }
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container py-4">
      <h2>Contact Us</h2>
      {submitted && <p className="alert alert-success">Message sent!</p>}
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="form-control mb-2" required />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="form-control mb-2" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className="form-control mb-2" required />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
