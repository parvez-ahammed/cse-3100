import { useState, useEffect } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email is invalid";
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-600 transform transition-all duration-500 hover:shadow-2xl animate-fade-in-up">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-semibold rounded-full animate-pulse">
              v1.0
            </span>
          </div>

          {submitted && (
            <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg shadow text-center animate-fade-in-down">
              Message sent successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="animate-fade-in-left delay-100">
              <label
                htmlFor="name"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 ${
                  errors.name
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 dark:border-gray-600 focus:ring-blue-300 dark:focus:ring-blue-500"
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 animate-fade-in">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="animate-fade-in-left delay-200">
              <label
                htmlFor="email"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 dark:border-gray-600 focus:ring-blue-300 dark:focus:ring-blue-500"
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 animate-fade-in">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="animate-fade-in-left delay-300">
              <label
                htmlFor="message"
                className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:outline-none transition-all duration-300 ${
                  errors.message
                    ? "border-red-500 focus:ring-red-300"
                    : "border-gray-300 dark:border-gray-600 focus:ring-blue-300 dark:focus:ring-blue-500"
                } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1 animate-fade-in">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="animate-fade-in-up delay-400">
              <button
                type="submit"
                className={`w-full px-6 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-medium rounded-full hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-600">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Data provided by the{" "}
              <a
                href="https://rickandmortyapi.com/"
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rick and Morty API
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
