import {useState} from "react" ;
export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = " Email is invalid " ;
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess(true) ;
      setFormData({ name: "", email: "", message: "" });
      setErrors ( {} );
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className="container my-4 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">Contact Us</h2>

        {success && (
          <div className="alert alert-success" role="alert">
            Your message has been sent successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className={`form-control ${errors.message ? "is-invalid" : ""}`}
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>

          <button className="btn btn-primary w-100" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
