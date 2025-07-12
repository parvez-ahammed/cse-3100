import { useState } from "react";
import Header from "../components/Header/header";
import Footer from "../components/footer/Footer";

export default function Contact() {
  const [isDark, setIsDark] = useState(true);

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
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />

      <main className="max-w-3xl mx-auto px-4 mt-20">
        <h2
          className={`text-2xl font-bold text-center my-4 transition-colors duration-300 ${
            isDark ? "text-green-400" : "text-blue-600"
          }`}
        >
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label
              className={`block font-semibold ${
                isDark ? "text-green-400" : "text-blue-600"
              }`}
            >
              Name
            </label>
            <input
              className={`w-full rounded border p-2 mt-1 focus:outline-none focus:ring-2 ${
                isDark
                  ? "bg-gray-800 border-green-400 text-green-400 focus:ring-green-400"
                  : "bg-white border-blue-400 text-blue-600 focus:ring-blue-400"
              }`}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              required
            />
          </div>

          <div>
            <label
              className={`block font-semibold ${
                isDark ? "text-green-400" : "text-blue-600"
              }`}
            >
              Email
            </label>
            <input
              className={`w-full rounded border p-2 mt-1 focus:outline-none focus:ring-2 ${
                isDark
                  ? "bg-gray-800 border-green-400 text-green-400 focus:ring-green-400"
                  : "bg-white border-blue-400 text-blue-600 focus:ring-blue-400"
              }`}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>

          <div>
            <label
              className={`block font-semibold ${
                isDark ? "text-green-400" : "text-blue-600"
              }`}
            >
              Message
            </label>
            <textarea
              className={`w-full rounded border p-2 mt-1 focus:outline-none focus:ring-2 ${
                isDark
                  ? "bg-gray-800 border-green-400 text-green-400 focus:ring-green-400"
                  : "bg-white border-blue-400 text-blue-600 focus:ring-blue-400"
              }`}
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              required
            />
          </div>

          <button
            className={`w-full rounded-xl font-bold py-2 transition ${
              isDark
                ? "bg-green-400 text-black hover:bg-green-500"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            type="submit"
          >
            Submit
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
