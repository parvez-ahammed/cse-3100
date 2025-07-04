import {useState} from "react";
export default function Contact() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [message,setMessage]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    setEmail("");
    setName("");
    setMessage("");
  };
  return (
    <div className="flex flex-col max-w-3xl mx-auto  px-4 sm:px-6 lg:px-8 py-8 text-black">
      <h2 className=" text-center text-3xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="block font-medium mb-1">Name</label>
          <input 
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full  border border-black rounded-xl px-4 py-2 
          focus:outline-none focus:ring-2 focus:ring-gray-800"
          placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="block font-medium mb-1">Email</label>
          <input 
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-black rounded-xl px-4 py-2 
          focus:outline-none focus:ring-2 focus:ring-gray-800"
          placeholder="abc@example.com" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="block font-medium mb-1">Message</label>
          <input 
          id="message"
          rows="10"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          required
          className="w-full border border-black rounded-xl px-4 py-2 
          focus:outline-none focus:ring-2 focus:ring-gray-800"
          placeholder="Write your message here..." />
        </div>
        <div className="flex justify-center">
          <button className="flex items-center gap-2 w-full sm:w-auto px-6 py-2 bg-black text-white rounded-xl
        font-medium hover:bg-gray-700 transition " type="submit">
          Send
        </button>
        </div>
      </form>
    </div>
  );
}
