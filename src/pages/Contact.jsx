// pages/contact.jsx or app/contact/page.jsx
"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Simulate submission success
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center px-4 pt-32">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div>
          <label className="block mb-1 text-lg">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-3 rounded bg-neutral-800 text-white border border-neutral-700"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block mb-1 text-lg">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-3 rounded bg-neutral-800 text-white border border-neutral-700"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className="block mb-1 text-lg">Message</label>
          <textarea
            name="message"
            rows="5"
            className="w-full p-3 rounded bg-neutral-800 text-white border border-neutral-700"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded font-semibold"
        >
          Submit
        </button>
        {submitted && (
          <p className="text-green-400 text-center mt-4">
            ✅ Your message has been sent!
          </p>
        )}
      </form>
    </div>
  );
}
