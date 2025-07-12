import { useState } from "react";
import {
  BsEnvelopeAtFill,
  BsPersonFill,
  BsChatRightTextFill,
} from "react-icons/bs";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.includes("@") || !message.trim()) {
      alert("❌ Please fill out all fields with valid information.");
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center mb-8">📩 Contact Us</h2>

      {submitted && (
        <div className="bg-green-100 text-green-700 px-4 py-3 rounded mb-6 text-center">
          ✅ Message sent successfully!
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-md rounded-xl space-y-6"
      >
        <div>
          <label className="block text-sm font-semibold mb-2">
            <BsPersonFill className="inline-block mr-2" />
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            <BsEnvelopeAtFill className="inline-block mr-2" />
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            <BsChatRightTextFill className="inline-block mr-2" />
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow"
          >
            📤 Submit Message
          </button>
        </div>
      </form>
    </div>
  );
}
