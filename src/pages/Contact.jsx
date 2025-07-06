import { useState } from "react";

export default function Contact() {
  const [Name, setName] = useState()
  const [Email, setEmail] = useState()
  const [message, setMessage] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Name && Email && message) {
      alert("Form submitted successfully");
    } else {
      alert("Plese fullup full form");
    }
  }
  return (
    <div className="max-w-2xl mx-auto p-6 mt-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            onChange={e => setName(e.target.value)}
            value={Name}
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            value={Email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            value={message}
            rows="5"
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Send
        </button>
      </form>
    </div>
  );
}
