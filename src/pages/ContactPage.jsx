import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
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

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate successful submission
    setSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});

    // Optionally, clear success message after some time
    setTimeout(() => setSuccess(false), 4000);
  };

  return (
    <div style={{ maxWidth: 500, margin: '2rem auto', padding: '1rem' }}>
      <h2>Contact Us</h2>
      {success && (
        <div style={{ marginBottom: '1rem', color: 'green', fontWeight: 'bold' }}>
          Your message has been sent successfully!
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name" style={{ display: 'block', fontWeight: '600' }}>Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: 4, border: errors.name ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', fontWeight: '600' }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', borderRadius: 4, border: errors.email ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message" style={{ display: 'block', fontWeight: '600' }}>Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            style={{ width: '100%', padding: '8px', borderRadius: 4, border: errors.message ? '2px solid red' : '1px solid #ccc' }}
          />
          {errors.message && <small style={{ color: 'red' }}>{errors.message}</small>}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
