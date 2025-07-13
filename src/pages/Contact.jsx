import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess("");
    } else {
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
<div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100 px-4 pt-20 pb-12 relative overflow-hidden">
{/* Inline animations using <style> */}
      <style>{`
        @keyframes slideUp { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes slideLeft { 0% { opacity: 0; transform: translateX(-40px); } 100% { opacity: 1; transform: translateX(0); } }
        @keyframes zoomIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes bounceIn { 0% { transform: translateY(-100%); opacity: 0; } 60% { transform: translateY(20%); opacity: 1; } 100% { transform: translateY(0); } }
      `}</style>

      <div
        className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-2xl"
        style={{ animation: "slideUp 0.8s ease-out forwards" }}
      >
        <h1
          className="text-4xl font-extrabold text-center text-indigo-600 mb-8"
          style={{ animation: "bounceIn 1s ease-out" }}
        >
          📬 Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div style={{ animation: "slideLeft 0.5s ease-out", animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div style={{ animation: "slideLeft 0.5s ease-out", animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div style={{ animation: "slideLeft 0.5s ease-out", animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <label className="block mb-1 font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <div className="text-center" style={{ animation: "zoomIn 0.4s ease-out", animationDelay: "0.5s", animationFillMode: "forwards" }}>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition font-semibold shadow-lg"
            >
              Send Message
            </button>
          </div>

          {success && (
            <p
              className="text-green-600 text-center mt-6 font-medium"
              style={{ animation: "zoomIn 0.4s ease-out", animationDelay: "0.6s", animationFillMode: "forwards" }}
            >
              {success}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
