import NavBar from "../components/NavBar";
import contactBg from "../assets/bg_pic/contact_bg.jpg";
import Footer from "../components/Footer";

export default function Contact() {
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

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-[#343131] font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-[#FFF4EA] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A9782]"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[#343131] font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-[#FFF4EA] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A9782]"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-[#343131] font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  className="w-full bg-[#FFF4EA] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A9782]"
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
      <Footer />
    </div>
  );
}
