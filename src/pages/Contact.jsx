import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
        setTimeout(() => setIsSubmitted(false), 3000);
      }, 1000);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-lime-100 p-8 mt-10 rounded-2xl shadow-xl border border-lime-300">
      <h2
        className="text-4xl mb-6 text-center font-extrabold"
        style={{ fontFamily: "'Get Schwifty', sans-serif", color: '#02afc5', letterSpacing: '1px' }}
      >
        Contact Us
      </h2>

      {isSubmitted && (
        <div className="mb-5 p-3 text-green-700 bg-green-100 border border-green-400 rounded text-center font-semibold">
          Thanks! Your message has been sent.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-bold">Name</label>
          <input
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#02afc5] transition ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-bold">Email</label>
          <input
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#02afc5] transition ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-bold">Message</label>
          <textarea
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#02afc5] transition ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 bg-[#02afc5] text-white font-bold rounded-md hover:bg-[#4cb5c3] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#02afc5] focus:ring-opacity-50 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          style={{ fontFamily: "'Get Schwifty', sans-serif", letterSpacing: '1px' }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
