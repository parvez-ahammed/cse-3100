[![wakatime](https://wakatime.com/badge/user/6c497c5f-2b02-40c1-ad2f-8a15dafdb680/project/f8bb579a-a927-4c38-a973-ee66fc190880.svg)](https://wakatime.com/badge/user/6c497c5f-2b02-40c1-ad2f-8a15dafdb680/project/f8bb579a-a927-4c38-a973-ee66fc190880)

# Rick & Morty Explorer

A beautiful and interactive single-page React application to explore, filter, and view details about characters from the Rick and Morty universe using the public Rick and Morty API.

---

## Features

- **Character List:** Browse all characters with images and basic info.
- **Character Details:** Click any character to view detailed info (name, image, status, species, origin, last known location, episode count).
- **Search & Filter:** Search by name and filter by status (Alive, Dead, Unknown). Filters persist in the URL.
- **Pagination:** Navigate through characters with Next/Previous buttons, 10 per page.
- **Contact Page:** Contact form with validation and success message.
- **About Page:** Static info about the app, developer, and a favorite Rick & Morty quote.
- **Reusable Components:** Clean, modular code with components like `CharacterCard`, `SearchBar`, and `FilterDropdown`.
- **Dark/Light Mode:** Toggle between dark and light themes (bonus).
- **Responsive Design:** Works well on desktop and mobile.

---

## Setup & Run Instructions

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v22.16.5 recommended)
- [VSCode](https://code.visualstudio.com/)
- [WakaTime extension for VSCode](https://wakatime.com/plugins/vscode) (for time tracking)

### Installation

```bash
git clone git@github.com:parvez-ahammed/cse-3100.git
cd cse-3100
git checkout assignment-1
npm install
```

### Running the App

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
  assets/         # Static assets (images, icons)
  common/         # API utilities and constants
  components/     # Reusable UI components
  context/        # React context providers (e.g., ThemeContext)
  features/       # Feature-specific components
  hooks/          # Custom React hooks
  pages/          # Page components (Home, About, Contact, Details)
  styles/         # CSS files
  App.jsx         # Main app component with routing
  main.jsx        # Entry point
```

---

## Known Issues / Limitations

- API rate limits may affect rapid navigation.
- No backend for contact form (success message only, no email sent).
- Some edge cases (e.g., empty search results) may need improved UX.

---

## Notes for Instructor

- All required features are implemented.
- Bonus: Dark/light mode toggle and persistent filters.
- Code is modular, commented, and follows best practices.
- Time tracked with WakaTime (see badge above).

---

## AI Tool Usage

- **Tool:** GitHub Copilot (AI assistant)
- **Purpose:** Used for UI design suggestions, code generation, and debugging assistance throughout the project.

---

## API Reference

- [Rick and Morty API Docs](https://rickandmortyapi.com/documentation)

---

## Credits

- [Rick and Morty API](https://rickandmortyapi.com/)
- React, Vite, Bootstrap

---

## Developer

- _Your Name Here_
- Favorite Rick & Morty Quote: "Wubba Lubba Dub Dub!"
