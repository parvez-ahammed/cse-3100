import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      setSuccessMessage("Your message has been sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setSuccessMessage("Please fill in all fields.");
    }
  };

  return (
    <div className="container my-4">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            className="form-control"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea
            className="form-control"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Send
        </button>
      </form>
      {successMessage && <p className="mt-3">{successMessage}</p>}
    </div>
  );
}