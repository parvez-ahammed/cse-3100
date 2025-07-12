import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Alert, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Cartoon font – make sure you include it in your index.html or use Google Fonts
const cartoonFont = "'Comic Neue', cursive";

const theme = createTheme({
  typography: {
    fontFamily: cartoonFont,
  },
  palette: {
    primary: {
      main: '#d96c6cff', 
    },
    success: {
      main: '#40977aff', 
    },
  },
});

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValidEmail = /\S+@\S+\.\S+/.test(form.email);
    if (form.name && isValidEmail && form.message) {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields correctly.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="sm"
        sx={{
          mt: 6,
          p: 4,
          backgroundColor: '#faffceff', 
          borderRadius: '1rem',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: '#000000ff' }}>
          Contact Us
        </Typography>

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            🎉 Thanks for your message!
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
        >
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            multiline
            rows={4}
            fullWidth
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: '#78a3ecff', // Tailwind blue-500
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#05112cff', // Tailwind blue-600
              },
            }}
          >
            🚀 Send Message
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
