import { useState } from "react";

export default function Contact() {
  const[form, setForm] = useState({name: "", email: "", message: ""});
  const[submitted, setSubmitted] = useState(false);
  const[errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) { 
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Email is invalid";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setForm({name: "", email: "", message: ""});
    }
  };

  const handleChange = (e) => {
    setForm ({ ...form, [e.target.name]: e.target.value});
  }

  return (
    <div className="container my-4 contacts">
      <h2>Contact Us</h2>

      {submitted && <p>Message sent Successfully</p> }

      <form onClick={handleSubmit}>
        <div className="mb-3 f-box">
          <label>Name:</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange} 
            className="form-control" type="text" 
          />
          {errors.name && <small className="red">{errors.name}</small> }
        </div>
        <div className="mb-3 f-box">
          <label>Email:</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange} 
            className="form-control" type="text" 
          />
          {errors.email && <small className="red">{errors.email}</small> }
        </div>
        <div className="mb-3 f-box">
          <label>Message:</label>
          <textarea
            name="message"
            value={form.message}
            rows={4}
            onChange={handleChange}
            className="form-control" type="text" 
          />
          {errors.message && <small className="red">{errors.message}</small> }
        </div>
        
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
