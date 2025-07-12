import { useState } from "react";
import NavBar from "../components/NavBar";
import contactBg from "../assets/bg_pic/contact_bg.jpg";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Simple validation
    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    setShowAlert(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow px-4 sm:px-8 md:px-16 py-8">
        <div
          className="bg-cover bg-center rounded-lg min-h-[600px] flex items-center justify-center"
          style={{ backgroundImage: `url(${contactBg})` }}
        >
          <div className="bg-white/80 backdrop-blur-md rounded-lg p-6 sm:p-10 w-full max-w-lg">
            <h2 className="text-3xl font-bold text-[#075B5E] mb-6">
              Contact Us
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-[#343131] font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-[#FFF4EA] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A9782]"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#343131] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-[#FFF4EA] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A9782]"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#343131] font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full bg-[#FFF4EA] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A9782]"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#4A9782] hover:bg-[#3b7f6c] text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Alert Box */}
      {showAlert && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white rounded-lg p-6 shadow-md text-center max-w-sm">
            <h3 className="text-xl font-semibold text-[#075B5E] mb-4">
              Message Sent Successfully!
            </h3>
            <p className="mb-6 text-gray-700">
              Thank you for contacting us. We will get back to you soon or
              not....
            </p>
            <button
              onClick={() => setShowAlert(false)}
              className="bg-[#4A9782] hover:bg-[#3b7f6c] text-white font-medium px-6 py-2 rounded-md"
            >
              OK
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
