import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      <nav className="nav-container">
        <div className="logo">🛸 Rick & Morty Explorer</div>
        <div className="nav-links">
          <button className="nav-link" onClick={() => window.history.back()}>
            Home
          </button>
          <span className="nav-link active">Contact Us</span>
        </div>
      </nav>
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Have questions about the multiverse? We're here to help!</p>
        </div>

        {showSuccess && (
          <div className="success-message">
            Thank you for your message! We'll get back to you soon.
          </div>
        )}

        <form className={`contact-form ${loading ? 'loading' : ''}`} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email address"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="5"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder="Tell us what's on your mind..."
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}