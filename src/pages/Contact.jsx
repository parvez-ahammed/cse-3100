import React, { useState, useEffect } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", form);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  const colors = {
    background: darkMode ? "#121212" : "#f8f9fa",
    cardBg: darkMode ? "#1e1e1e" : "#ffffff",
    text: darkMode ? "#e4e4e4" : "#212529",
    border: darkMode ? "#333" : "#ccc",
    error: "#dc3545",
    success: "#198754",
    primary: "#0d6efd",
    inputBg: darkMode ? "#2c2c2c" : "#fff"
  };

  return (
    <div
      style={{
        backgroundColor: colors.background,
        minHeight: "100vh",
        padding: "40px 16px",
        fontFamily: "'Segoe UI', sans-serif",
        color: colors.text,
        transition: "all 0.3s ease"
      }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: colors.cardBg,
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            padding: "30px",
            border: `1px solid ${colors.border}`,
            transition: "all 0.3s ease"
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "24px", color: colors.primary }}>
            Contact Us
          </h2>

          {submitted && (
            <div
              style={{
                backgroundColor: colors.success,
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "8px",
                marginBottom: "20px",
                textAlign: "center"
              }}
            >
              Thank you! Your message has been sent.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            {["name", "email", "message"].map((field, idx) => (
              <div key={idx} style={{ marginBottom: "20px" }}>
                <label
                  htmlFor={field}
                  style={{
                    display: "block",
                    marginBottom: "6px",
                    fontWeight: "600"
                  }}
                >
                  {field.charAt(0).toUpperCase() + field.slice(1)}
                </label>

                {field === "message" ? (
                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontSize: "16px",
                      borderRadius: "8px",
                      border: `1px solid ${errors.message ? colors.error : colors.border}`,
                      backgroundColor: colors.inputBg,
                      color: colors.text,
                      resize: "vertical",
                      outline: "none",
                      transition: "border 0.2s ease"
                    }}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={
                      field === "name" ? "Your full name" : "example@example.com"
                    }
                    style={{
                      width: "100%",
                      padding: "12px",
                      fontSize: "16px",
                      borderRadius: "8px",
                      border: `1px solid ${errors[field] ? colors.error : colors.border}`,
                      backgroundColor: colors.inputBg,
                      color: colors.text,
                      outline: "none",
                      transition: "border 0.2s ease"
                    }}
                  />
                )}

                {errors[field] && (
                  <div style={{ color: colors.error, marginTop: "6px", fontSize: "14px" }}>
                    {errors[field]}
                  </div>
                )}
              </div>
            ))}

            <div style={{ display: "grid" }}>
              <button
                type="submit"
                style={{
                  backgroundColor: colors.primary,
                  color: "#fff",
                  padding: "12px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease"
                }}
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
