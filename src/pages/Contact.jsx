import { useState } from "react";

export default function Contact({ theme }) {
  const isDark = theme === "dark";

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.message) errs.message = "Message is required";

    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: 8,
    marginBottom: 8,
    border: `1px solid ${isDark ? "#444" : "#ccc"}`,
    borderRadius: 4,
    backgroundColor: isDark ? "#2e2e2e" : "#fff",
    color: isDark ? "#eee" : "#111",
  };

  const errorStyle = { color: "red", fontSize: "0.85rem" };

  return (
    <div
      style={{
        maxWidth: 500,
        margin: "40px auto",
        padding: 20,
        borderRadius: 8,
        backgroundColor: isDark ? "#1e1e1e" : "#f4f4f4",
        color: isDark ? "#eee" : "#111",
      }}
    >
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.name && <div style={errorStyle}>{errors.name}</div>}

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={inputStyle}
        />
        {errors.email && <div style={errorStyle}>{errors.email}</div>}

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          style={inputStyle} // <-- height removed here
        />
        {errors.message && <div style={errorStyle}>{errors.message}</div>}

        <button
          type="submit"
          style={{
            marginTop: 10,
            padding: "10px 16px",
            backgroundColor: isDark ? "#00ff9f" : "#00776f",
            color: isDark ? "#000" : "#fff",
            border: "none",
            borderRadius: 4,
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Send
        </button>

        {success && (
          <div style={{ color: "#00ff9f", marginTop: 10 }}>
            Message sent successfully!
          </div>
        )}
      </form>
    </div>
  );
}
