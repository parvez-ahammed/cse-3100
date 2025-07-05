
# Rick & Morty Explorer

A beautiful and interactive single-page application that allows users to explore, filter, and view details about characters from the Rick and Morty universe using the public Rick and Morty API.

---
## Live Demo

Curious to see it in action? 🚀
👉 [Explore the Rick & Morty Explorer Live!](https://rick2406.netlify.app/)

## Wakatime Badge

[![wakatime](https://wakatime.com/badge/user/652acd96-cfb8-4029-a662-a80978f37e02/project/a035ceb1-95ca-482f-91d4-07c66622e8f2.svg)](https://wakatime.com/badge/user/652acd96-cfb8-4029-a662-a80978f37e02/project/a035ceb1-95ca-482f-91d4-07c66622e8f2)

## Implemented Features
- Character Details Page (dynamic route, full info, episode titles)
- Character Search & Filtering (by name and status, persists in localStorage)
- Pagination (10 characters per page, prevents going past first/last page)
- Contact Us Page (form validation, toast message)
- About Us Page (static info, developer, honest quote)
- Navbar for swift and easy navigation (responsive, dark mode toggle)
- Dark/Light Mode Toggle (persists in localStorage)
- Loading Animation (Lottie, centered)

## Improvements
- Episode titles shown in character details
- Search/filter preferences stored in localStorage
- Responsive design: 5 cards per row on desktop
- Attractive, classic CSS for all pages
- Toast message on contact form submit

## Known Issues
- API errors (e.g., no results) do not show a custom error message
- Lottie loading animation requires internet access
- No backend for contact form (messages not actually sent)

## AI Tools & Usage
- GitHub Copilot: Used for code suggestions, refactoring, and CSS generation
- ChatGPT: Used for code review, bug fixing, and feature planning

## Short Bullet Points
- Dynamic character detail pages
- Search and filter with localStorage persistence
- 10 characters per page, paginated
- Responsive grid (5 per row)
- Dark/light mode toggle
- Lottie loading animation
- Toast notification on contact form
- Clean, commented, and modular code

---

## Requirements

Make sure you have the following installed:

- [Node.js (preferably v22.16.5)](https://nodejs.org/en/download/)
- [Code editor – VSCode](https://code.visualstudio.com/)
- [NVM (optional)](https://github.com/coreybutler/nvm-windows)
- [WakaTime extension for VSCode (to track total time invested in this project)](https://wakatime.com/plugins/vscode)

---

## Setup Instructions

### Clone the Repository

Fork the base repository. Then, clone the forked repository to your local machine and switch to the branch assignment-1

```bash
git clone https://github.com/Bijoy2406/cse-3100.git
cd cse-3100
git checkout assignment-1-20220204157
```

### Install Dependencies

Run the following to install npm dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

---
