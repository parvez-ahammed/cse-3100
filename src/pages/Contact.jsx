import { useState } from "react";

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
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-gray-800 text-center my-4">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div>
          <label className="block font-semibold text-gray-700">Name</label>
          <input
            className="w-full rounded border border-gray-300 p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Email</label>
          <input
            className="w-full rounded border border-gray-300 p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
        </div>
        <div>
          <label className="block font-semibold text-gray-700">Message</label>
          <textarea
            className="w-full rounded border border-gray-300 p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          />
        </div>
        <button
          className="w-full rounded-xl bg-gray-900 text-white font-bold py-2 hover:bg-gray-800 transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
