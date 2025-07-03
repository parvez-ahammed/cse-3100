import { useFormik } from "formik";
import * as Yup from "yup";
// Idk how formik or yup works since we were advised to use AI for this as it gets messy and complicated
// so I did exactly that

// This is more deepseek blackmagic

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log("Form data:", values); // Replace with API call
      resetForm();
      alert("Message sent successfully!");
    },
  });

  return (
    <div className="container my-4">
      <h2>Contact Us</h2>
      <form onSubmit={formik.handleSubmit}>
        {/* Name Field */}
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className={`form-control ${
              formik.touched.name && formik.errors.name ? "is-invalid" : ""
            }`}
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="invalid-feedback">{formik.errors.name}</div>
          ) : null}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className={`form-control ${
              formik.touched.email && formik.errors.email ? "is-invalid" : ""
            }`}
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="invalid-feedback">{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Message Field */}
        <div className="mb-3">
          <label>Message</label>
          <textarea
            rows="5"
            className={`form-control ${
              formik.touched.message && formik.errors.message
                ? "is-invalid"
                : ""
            }`}
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          ></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="invalid-feedback">{formik.errors.message}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
}
