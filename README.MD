
[![wakatime](https://wakatime.com/badge/user/77b92341-2c76-4833-925d-42b65958bf2f/project/e94687d7-fa25-4e09-bd2c-840642d6ae35.svg)](https://wakatime.com/badge/user/77b92341-2c76-4833-925d-42b65958bf2f/project/e94687d7-fa25-4e09-bd2c-840642d6ae35)

# Rick & Morty Explorer

A beautiful and interactive single-page React application to explore, filter, and view details about characters from the Rick and Morty universe using the public Rick and Morty API.

---

## Features

- **Character List**: Browse all characters with images, names, status, and species.
- **Character Details**: Click a character to view detailed info (origin, last known location, number of episodes, etc.) on a dynamic route.
- **Search & Filter**: Filter characters by name and status (Alive, Dead, Unknown). Filters persist in the URL.
- **Pagination**: Navigate through characters, 10 per page, with Next/Previous buttons.
- **Contact Us Page**: Submit a form with validation and success message.
- **About Us Page**: Learn about the app, developer, and see a favorite Rick & Morty quote.
- **Responsive Design**: Fully responsive and modern UI.
- **Reusable Components**: Clean code with reusable components like `CharacterCard`.
- **Error Handling**: User-friendly error and loading states.

---

## Setup & Run Instructions

1. **Clone the Repository**
   ```bash
   git clone <your-fork-url>
   cd cse-3100
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Structure

```
src/
  App.jsx
  main.jsx
  index.css
  assets/
  components/
    CharacterCard.jsx
    CharacterCard.css
  pages/
    Home.jsx / Home.css
    CharacterDetail.jsx / CharacterDetail.css
    Contact.jsx / Contact.css
    About.jsx / About.css
public/
  vite.svg
index.html
vite.config.js
package.json
```

---

## API Reference

- List characters: [https://rickandmortyapi.com/api/character](https://rickandmortyapi.com/api/character)
- Search by name: [https://rickandmortyapi.com/api/character/?name=rick](https://rickandmortyapi.com/api/character/?name=rick)
- Filter by status: [https://rickandmortyapi.com/api/character/?status=alive](https://rickandmortyapi.com/api/character/?status=alive)

---

## Known Issues / Limitations

- No persistent storage for favorites or preferences (except via URL).
- No dark/light mode toggle (bonus).
- No episode titles in character detail (bonus).

---

## AI Tool Usage

- **Tool Used**: GitHub Copilot
- **How Used**: Assisted in CSS design for modern, responsive layouts and for debugging React component logic and API integration.

---

## Developer

Ethan Carter

---

## Favorite Rick & Morty Quote

> “To live is to risk it all; otherwise, you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.”

---

## Notes

- This is a fan-made project for educational purposes.
- Not affiliated with or endorsed by the creators of Rick and Morty.
