import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>

        {success && (
          <div className="mb-6 p-4 rounded-lg bg-green-100 text-green-800 border border-green-300 text-sm text-center">
            Your message has been sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={`mt-2 w-full px-4 py-3 rounded-lg border text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={`mt-2 w-full px-4 py-3 rounded-lg border text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              className={`mt-2 w-full px-4 py-3 rounded-lg border text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
