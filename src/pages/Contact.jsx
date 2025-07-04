import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage("✅ Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      console.log("Submitted:", formData);
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className='container py-5'>
      <div className='row justify-content-center'>
        <div className='col-md-8 col-lg-6'>
          <div className='card shadow-sm'>
            <div className='card-body'>
              <h2 className='text-center mb-4'>📩 Contact Us</h2>

              {successMessage && (
                <div className='alert alert-success' role='alert'>
                  {successMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className='mb-3'>
                  <label htmlFor='name' className='form-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Enter your name'
                  />
                  {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                </div>

                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Enter your email'
                  />
                  {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                </div>

                <div className='mb-3'>
                  <label htmlFor='message' className='form-label'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='5'
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Write your message...'></textarea>
                  {errors.message && <div className='invalid-feedback'>{errors.message}</div>}
                </div>

                <div className='d-grid'>
                  <button type='submit' className='btn btn-primary'>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p className='text-center mt-4 text-muted' style={{ fontSize: "0.9rem" }}>
            We’ll get back to you as soon as possible. Thanks for reaching out!
          </p>
        </div>
      </div>
    </div>
  );
}
