import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 
  const [errors, setErrors] = useState({});

 
  const [successMessage, setSuccessMessage] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault(); 

    let newErrors = {}; 
    let isValid = true; 

  
    if (!name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    
    if (!email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) { 
      newErrors.email = "Email address is invalid.";
      isValid = false;
    }

   
    if (!message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors); 

    if (isValid) {
      setSuccessMessage("Your message has been sent successfully!");
      
      setName("");
      setEmail("");
      setMessage("");
      setErrors({}); 
      
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000); 
    }
  };

  return (
    
    <div className="container mx-auto my-8 p-8 bg-gray-900 text-white rounded-lg shadow-xl border border-gray-700 max-w-2xl">
      <h2 className="text-3xl font-extrabold mb-8 text-blue-400 text-center">Contact The Council of Ricks</h2> 
      

      {successMessage && (
        <div 
          className="bg-green-600 bg-opacity-80 border border-green-700 text-white px-4 py-3 rounded-md relative mb-6 animate-fade-in"
          role="alert"
        >
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">{successMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8"> 
        <div>
          <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            className={`block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 shadow-sm sm:text-sm ${
              errors.name ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
            }`}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-400 text-xs italic mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className={`block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 shadow-sm sm:text-sm ${
              errors.email ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your.email@example.com"
          />
          {errors.email && <p className="text-red-400 text-xs italic mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
            Message:
          </label>
          <textarea
            id="message"
            rows="5"
            className={`block w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-500 shadow-sm sm:text-sm ${
              errors.message ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""
            }`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          ></textarea>
          {errors.message && <p className="text-red-400 text-xs italic mt-1">{errors.message}</p>}
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
