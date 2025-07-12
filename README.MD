[![wakatime](https://wakatime.com/badge/user/94999694-7615-4f22-a018-4b2227b695e8/project/0c4a0a24-1593-41f4-8b28-5b6bf31a293a.svg)](https://wakatime.com/badge/user/94999694-7615-4f22-a018-4b2227b695e8/project/0c4a0a24-1593-41f4-8b28-5b6bf31a293a)

# 🛸 Rick & Morty Explorer

An interactive single-page React application that lets users explore characters from the Rick and Morty universe using the public Rick and Morty API.

This project was developed as **Assignment 1** for the CSE-3100 course.

---

## ✨ Features Implemented

### ✅ Character Details Page
- Dynamic routing for each character (e.g., `/character/1`)
- Displays:
  - Name
  - Image
  - Status
  - Species
  - Origin
  - Last known location
  - Number of episode appearances

### 🔍 Search + Filter Functionality
- Search bar to filter characters by name
- Dropdown to filter by status (Alive, Dead, Unknown)
- Filters persist in URL via query parameters

### 🔄 Pagination
- Supports next/previous page navigation
- Only 10 characters per page
- Prevents going beyond first/last page

### 📬 Contact Us Page
- Route: `/contact`
- Form with:
  - Name
  - Email
  - Message
- Form validation:
  - Required fields
  - Email format validation
- Displays a success message upon submission and resets the form

### ℹ️ About Us Page
- Route: `/about`
- Contains:
  - App description
  - Developer details
  - Favorite Rick & Morty quote

### ♻️ Code Quality
- Modular and clean code structure
- Reusable components (e.g., `CharacterCard`, `SearchBar`, `FilterDropdown`)
- Descriptive variable and function names
- Well-commented logic and consistent formatting

---



🤖 AI Usage
AI tools were used to enhance development productivity:

✅ CSS Styling Help: Used to generate custom responsive UI styling.

✅ Debugging Support: Helped identify and fix React and JavaScript logic errors.

Tool used: ChatGPT (OpenAI)



