import { useState } from "react";

export default function Contact() {

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  /*Handles the form state, input changes, and resets after a successful submit*/
  const handleChange = (field) => (e) => {
   setForm({ ...form, [field]: e.target.value });
   if (submitted) setSubmitted(false);
  };

  /* Validates form fields and shows error messages if something's missing or wrong*/
  const validate = () => {
  const newErrors = {};
    if (!form.name) newErrors.name = "Name is required.";
    if (!form.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format.";
    if (!form.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <div className="container my-4">
      <h2>Contact Us</h2>
      {submitted && (
        <div className="alert alert-success">Message sent successfully!The form has been reset.</div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label>Name</label>
          <input 
           className="form-control" 
           type="text" 
           value={form.name}
           onChange={handleChange("name")}
          />
        {errors.name && <small className="text-danger">{errors.name}</small>}
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input 
           className="form-control" 
           type="email" 
           value={form.email}
           onChange={handleChange("email")}
          />
        </div>

        {errors.email && (
            <small className="text-danger">{errors.email}</small>
         )}

        <div className="mb-3">
          <label>Message</label>
          <textarea 
           className="form-control" 
           rows="5"
           value={form.message}
            onChange={handleChange("message")}
          />

        {errors.message && (
            <small className="text-danger">{errors.message}</small>
        )}

        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
