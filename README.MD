
# Rick & Morty Explorer – Assignment 1

## Short Description

- React single-page app for exploring Rick & Morty characters
- Browse, search, filter, and view character details using the public API
- Features dynamic routing, reusable components, pagination, and forms
- Clean, modern UI with CSS generated and debugged using ChatGPT

[![wakatime](https://wakatime.com/badge/user/af88f160-404c-4021-be8b-a70060b0588f/project/7b3ba0f4-caf5-4c0e-beb1-f348968ba013.svg)](https://wakatime.com/badge/user/af88f160-404c-4021-be8b-a70060b0588f/project/7b3ba0f4-caf5-4c0e-beb1-f348968ba013)


## Project Summary

Rick & Morty Explorer is a single-page React application that lets users explore, search, filter, and view details about characters from the Rick and Morty universe using the public Rick and Morty API.

---

## Implemented Features

- **Character List**: Browse all characters with images, names, status, and species.
- **Character Details Page**: Click a character to view full details (name, image, status, species, origin, last known location, number of episodes).
- **Search & Filter**: Search by name and filter by status (Alive, Dead, Unknown). Filters persist in the URL as query parameters.
- **Pagination**: Next/Previous buttons to navigate pages, showing 10 characters per page. Prevents going past first/last page.
- **Contact Us Page**: Form with name, email, and message. Includes validation and success message on submit.
- **About Page**: Static info about the app, developer, and a Rick & Morty quote.
- **Reusable Components**: CharacterCard, SearchBar, FilterDropdown, and more.
- **Routing**: All pages are accessible via React Router.

---

## Additional Improvements

- Clean code structure and meaningful variable/component names.
- CSS generated and debugged with ChatGPT for a modern, responsive look.
- Error handling for API requests.
- WakaTime integration for time tracking.

---

## Setup & Run Instructions

1. **Clone the repository:**
   ```bash
   git clone git@github.com:parvez-ahammed/cse-3100.git
   cd cse-3100
   git checkout assignment-1
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **Open in browser:**
   Visit `http://localhost:5173` (or the port shown in your terminal).

---

## Known Issues / Limitations

- No dark/light mode toggle (bonus feature not implemented).
- Search and filter preferences are not stored in localStorage.
- Episode titles in character details are not shown (bonus feature not implemented).
- Basic styling only; advanced UI/UX improvements possible.

---

## AI Tool Usage

- **ChatGPT**: Used for generating and debugging CSS, and for code review and troubleshooting during development.

---

## Notes for Instructor

- All required features are implemented and tested.
- WakaTime was used for time tracking (see badge above).
- Code is commented and organized for clarity.
- Please refer to the source code for reusable components and routing setup.

---

## Project Structure

- `src/assets`: Static assets (images, icons)
- `src/common`: Common utilities and constants
- `src/components`: Reusable components (CharacterCard, SearchBar, FilterDropdown)
- `src/config`: Configuration files
- `src/context`: Context providers
- `src/features`: Feature-specific components
- `src/pages`: Page components (HomePage, CharacterDetailsPage, ContactPage, AboutPage)
- `src/hooks`: Custom hooks
- `src/utils`: Utility functions
- `src/styles`: CSS files or styled components
- `src/routes`: Route definitions

---

## API Reference

- List characters: [https://rickandmortyapi.com/api/character](https://rickandmortyapi.com/api/character)
- Search by name: [https://rickandmortyapi.com/api/character/?name=rick](https://rickandmortyapi.com/api/character/?name=rick)
- Filter by status: [https://rickandmortyapi.com/api/character/?status](https://rickandmortyapi.com/api/character/?status)
- Prevent going past first/last page.
