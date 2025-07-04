// Idk how formik or yup works since we were advised to use AI for this as it gets messy and complicated
// so I did exactly that

// This is more deepseek blackmagic

import Navbar from "../components/Navbar";
import MuiTextField from "../components/MuiTextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Box, Typography, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
      console.log("Form data:", values);
      resetForm();
      alert("Message sent successfully!");
    },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Box sx={{ maxWidth: 600, mx: "auto", p: 3 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
            Contact Us
          </Typography>

          <form onSubmit={formik.handleSubmit}>
            {/* Name Field */}
            <MuiTextField
              name="name"
              label="Name"
              formik={formik}
              sx={{ mb: 3 }}
            />

            {/* Email Field */}
            <MuiTextField
              name="email"
              label="Email"
              type="email"
              formik={formik}
              sx={{ mb: 3 }}
            />

            {/* Message Field */}
            <MuiTextField
              name="message"
              label="Message"
              formik={formik}
              multiline
              rows={4}
              sx={{ mb: 4 }}
            />

            <Button
              type="submit"
              variant="contained"
              startIcon={<SendIcon />}
              size="large"
              fullWidth
            >
              Send Message
            </Button>
          </form>
        </Paper>
      </Box>
    </div>
  );
}
