import { useState } from 'react';
import { Link } from 'react-router-dom';

// Futuristic contact page with enhanced holographic form and gradient background
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="container mx-auto p-6 bg-gradient-to-br from-dark-space via-purple-950 to-dark-space min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-widest text-neon-green mb-10 animate-pulse-glow select-none text-center">
        Contact the Multiverse
      </h1>
      <article className="bg-holo-glass backdrop-blur-lg border border-neon-green/40 rounded-2xl p-8 max-w-2xl w-full mx-auto shadow-[0_0_20px_rgba(0,255,159,0.4)] animate-fade-in transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,159,0.6)]">
        {submitted && (
          <p
            className="text-neon-green bg-dark-space/70 border border-neon-green/50 rounded-lg p-4 mb-6 text-center font-semibold animate-fade-in"
            role="alert"
          >
            Message sent to the multiverse! We'll get back to you soon!
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold text-white/90">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="border border-neon-green/50 bg-holo-glass backdrop-blur-md rounded-lg p-3 w-full text-white/90 focus:ring-2 focus:ring-neon-green focus:border-neon-green transition-all duration-300 hover:border-neon-green/80 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neon-green focus-visible:ring-opacity-50"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p id="name-error" className="text-hot-pink text-sm mt-1" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-white/90">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="border border-neon-green/50 bg-holo-glass backdrop-blur-md rounded-lg p-3 w-full text-white/90 focus:ring-2 focus:ring-neon-green focus:border-neon-green transition-all duration-300 hover:border-neon-green/80 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neon-green focus-visible:ring-opacity-50"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p id="email-error" className="text-hot-pink text-sm mt-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-semibold text-white/90">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="border border-neon-green/50 bg-holo-glass backdrop-blur-md rounded-lg p-3 w-full text-white/90 focus:ring-2 focus:ring-neon-green focus:border-neon-green transition-all duration-300 hover:border-neon-green/80 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-neon-green focus-visible:ring-opacity-50"
              rows="5"
              placeholder="Send us your interdimensional thoughts!"
            ></textarea>
            {errors.message && (
              <p id="message-error" className="text-hot-pink text-sm mt-1" role="alert">
                {errors.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-neon-green to-electric-blue text-dark-space rounded-full font-semibold hover:shadow-[0_0_20px_rgba(0,255,159,0.8)] transition-all duration-300 animate-scale-up w-full focus:outline-none focus:ring-4 focus:ring-neon-green focus:ring-opacity-50 active:scale-95"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center mt-6">
          <Link
            to="/"
            className="group relative text-neon-green font-semibold flex items-center gap-2 px-6 py-3 bg-dark-space/70 rounded-lg transition-all duration-300 hover:bg-hot-pink hover:text-dark-space focus:outline-none focus:ring-4 focus:ring-neon-green focus:ring-opacity-50 active:scale-95"
            aria-label="Return to homepage"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            <span className="whitespace-nowrap">Back to List</span>
          </Link>
        </div>
      </article>
      <footer className="mt-10 text-white/60 text-center">
        <p>Powered by <a href="https://rickandmortyapi.com/" className="text-neon-green hover:text-hot-pink transition-colors" target="_blank" rel="noopener noreferrer">Rick and Morty API</a></p>
       
      </footer>
    </main>
  );
};

export default ContactPage;