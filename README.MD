# Rick & Morty Explorer

A modern, responsive React app to explore characters from the Rick and Morty universe using the public Rick and Morty API.

## Features

- Search characters by name
- Filter by status (Alive, Dead, Unknown)
- Pagination (10 characters per page)
- Character details with image, status, species, origin, location, and creation date
- About page with app and developer info
- Contact page with form validation and success message
- Responsive design for all devices

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
   git clone https://github.com/AdelZahid/cse-3100.git
   cd cse-3100

2. Install dependencies:
   npm install

3. Start the development server:
   npm run dev

The app will be available at http://localhost:5173

## Project Structure

src/
  assets/
    react.svg
  components/
    CharacterCard.jsx
    Navigation.jsx
    SearchBar.jsx
    styles/
      CharacterCard.css
  hooks/
    useQueryParams.js
  pages/
    About.jsx
    CharacterDetail.jsx
    Contact.jsx
    Home.jsx
    styles/
      About.css
      CharacterDetail.css
      Contact.css
      Home.css
  App.jsx
  main.jsx
  index.css

## Tech Stack

- React
- Vite
- JavaScript
- CSS3
- Rick and Morty API

## Developer

Adel Mohammad Zahid  
CSE Student, Ahsanullah University of Science and Technology  
3rd Year, 1st Semester  
ID: 20220204057  
adelzahid.cse@gmail.com

## Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com)
- Dan Harmon & Justin Roiland for Rick and Morty

---

_"Wubba lubba dub dub!" — Rick Sanchez_
