import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Handles changes to form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error for the field as user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    // Clear success message on any input change
    setSuccessMessage("");
  };

  // Validates the form fields
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (validateForm()) {
      // If form is valid, display success message
      setSuccessMessage("Your message has been sent successfully!");
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      // Clear any previous errors
      setErrors({});
      // In a real application, you would send this data to a server here.
      console.log("Form submitted successfully:", formData);
    } else {
      setSuccessMessage(""); // Clear success message if validation fails
    }
  };

  return (
    <div className='container my-4'>
      <h2>Contact Us</h2>
      {successMessage && (
        <div className='alert alert-success mb-3' role='alert'>
          {successMessage}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className='invalid-feedback'>{errors.name}</div>}
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
        </div>
        <div className='mb-3'>
          <label htmlFor='message' className='form-label'>
            Message
          </label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id='message'
            name='message'
            rows='5'
            value={formData.message}
            onChange={handleChange}></textarea>
          {errors.message && <div className='invalid-feedback'>{errors.message}</div>}
        </div>
        <button type='submit' className='btn btn-primary'>
          Send
        </button>
      </form>
    </div>
  );
}
