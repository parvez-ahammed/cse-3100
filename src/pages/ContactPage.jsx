import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && validateEmail(email) && message) {
      setSuccessMessage("✅ Your message has been sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setSuccessMessage("❌ Please fill in all fields correctly.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="max-w-2xl mx-auto my-12 p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
      <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400 mb-6 text-center drop-shadow">
        Contact Us
      </h2>
      {successMessage && (
        <div
          className={`mb-4 text-center font-semibold ${
            successMessage.startsWith("✅")
              ? "text-green-600"
              : "text-red-600"
          }`}
        >
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
            Message
          </label>
          <textarea
            className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-bold text-lg shadow-lg hover:bg-blue-700 transition"
          type="submit"
        >
          Send
        </button>
      </form>
      <div className="flex justify-center mt-8">
        <img
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="Morty Smith"
          className="rounded-full w-20 h-20 border-4 border-blue-400 shadow-lg"
        />
      </div>
    </div>
  );
}