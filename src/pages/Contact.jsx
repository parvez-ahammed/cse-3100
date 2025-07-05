import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="bg-green-100 min-h-screen py-10">
      <div className="max-w-3xl mx-auto bg-green-200/30 rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-1">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="5"
              required
              className="border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full md:w-1/2 px-6 py-3 bg-indigo-500 hover:bg-green-500 transition-colors text-white rounded-xl font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
