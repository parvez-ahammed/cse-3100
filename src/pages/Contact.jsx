import { useState } from "react";

export default function Contact() {
  //controlled elements should go here....
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //validating required fields
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields");
      setSuccess("");
      return;
    }

    //validating the email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Thank you! Your message has been sent.");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="mt-12 flex flex-col gap-7 p-7 bg-gray-50 border-2 border-neutral-600 shadow-2xl rounded-2xl w-[75vw] max-w-3xl mx-auto">
      <h1 className="font-bold text-4xl self-center text-gray-800">
        Contact Us
      </h1>
      <form className="p-7 flex flex-col gap-6" onSubmit={handleSubmit}>
        {error && <p className="text-red-600 text-center">{error}</p>}
        {success && <p className="text-green-600 text-center">{success}</p>}
        {/* Name Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        {/* Email Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-700 font-medium">
            Email
          </label>
          <input
            type="emali"
            id="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* Message Field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-gray-700 font-medium">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Your message here..."
            className="w-full p-3 rounded-xl border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-4 cursor-pointer bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-colors duration-300 self-center"
        >
          Send
        </button>
      </form>
    </div>
  );
}
