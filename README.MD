# Rick & Morty Explorer – Assignment 1

In this project, you'll build a beautiful and interactive single-page application that allows users to explore, filter, and view details about characters from the Rick and Morty universe using the public Rick and Morty API.

You'll apply React and JavaScript skills, routing, API fetching, conditional rendering, and basic UX design.

---
## Wakatime Badge

[![wakatime](https://wakatime.com/badge/user/b6123c3e-1dbd-428c-bcdf-e609d68d7c89/project/a24ecc71-acbf-4bb4-a63e-f9650f049fa4.svg)](https://wakatime.com/badge/user/b6123c3e-1dbd-428c-bcdf-e609d68d7c89/project/a24ecc71-acbf-4bb4-a63e-f9650f049fa4)

# 🧪 Rick & Morty Explorer

**Rick and Morty Explorer** is a React-based application that allows users to explore characters from the Rick and Morty universe with features like searching, filtering, pagination, and detailed views. The app emphasizes clean UI, routing, and theme switching.

---

## 🔥 Implemented Features

### 🔍 Character Gallery

- Live data fetched from the official Rick & Morty API
- Name-based search
- Status-based filter (Alive / Dead / Unknown)
- Pagination with Previous and Next buttons
- Only first 10 characters shown per page
- No filter shown if no results match search

### 👤 Character Detail Page

- Displays profile: image, name, status, species, origin, location, episodes
- Image is downloadable and interactive
- Enlarged image, neatly styled
- Fully responsive layout

### 📄 About Page

- App description
- Developer image and contact info
- Favorite Rick & Morty quote
- Clean, box-free layout with theme-sensitive design

### ✉️ Contact Page

- Form with Name, Email, and Message fields
- Validation (required fields, valid email)
- Success message shown on submit
- Fully resets after submission
- Responsive, minimal UI

### 🧭 Navbar

- Custom logo centered
- Navigation: Home, About Us, Contact Us (right-aligned)
- Fixed at top of screen
- Logo redirects to Home
- Theme toggle switch (Dark/Light)
- Current theme is persisted using `localStorage`
- Fully responsive on all screens

### 🦶 Footer

- Multi-column layout with sections
- Theme-aware design:
  - Black in Dark Mode
  - Light blue in Light Mode
- Sticks to bottom of the page
- Responsive layout

---

## 💡 Additional Improvements

- Dark/Light mode available across all pages
- Navbar and footer are persistent and styled for both themes
- About and Contact sections respect theme styles with clean layout
- Character "No results" gracefully hides filters

---

## 🤖 AI Tool Usage

This project was developed with the help of **ChatGPT** by **OpenAI**.

- **Tool Used:** ChatGPT-4
- **Usage Description:**
  - Helped in designing component structure and layout and also debugging 
  - Helped troubleshoot routing logic and JSX structure 


---
## 📌 Notes

- No backend was used; data comes directly from the Rick & Morty API
- State is handled using React’s `useState` and `useEffect`
- Project routes are handled in `AppRouter.jsx` for clarity
- No third-party UI frameworks used — only custom CSS

---

Thanks for exploring.

