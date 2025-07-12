# Rick & Morty Explorer – Assignment 1

- **Waka Time**  
  [![wakatime](https://wakatime.com/badge/user/3944b5f4-3bb5-4f43-a702-0fcf1e7bd0e9/project/3e433f9d-03bb-4c0d-8a3e-850d1a616b8b.svg)](https://wakatime.com/badge/user/3944b5f4-3bb5-4f43-a702-0fcf1e7bd0e9/project/3e433f9d-03bb-4c0d-8a3e-850d1a616b8b)

- **AI Tool Usage (If Used):**  
  ChatGPT used for speeding up coding process

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
git clone git@github.com:priontysaha/cse-3100.git
cd cse-3100
git checkout assignment-1
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

## Changes Done

### 🔍 Character Details Page

- Implemented dynamic routing using React Router to navigate to individual character pages (e.g., `/character/1`).
- Each character page displays:
  - **Name**
  - **Image**
  - **Status**
  - **Species**
  - **Origin**
  - **Last known location**
  - **Number of episodes appeared in**

### 🔎 Search and Filter Functionality

- Added a search box to filter characters by name.
- Included a dropdown to filter characters by status: Alive, Dead, or Unknown.
- Combined filters work together and persist in the URL via query parameters (e.g., `?name=rick&status=alive`).

### 📄 Pagination

- Utilized the API's built-in pagination to display 10 characters per page.
- Implemented "Next" and "Previous" buttons to navigate between pages.
- Ensured navigation does not go beyond the first or last page.

### 📬 Contact Us Page

- Created a `/contact` route with a form that includes:
  - **Name**
  - **Email**
  - **Message**
  - **Submit** button
- Implemented form validation to ensure:
  - All fields are required.
  - Email follows a valid format.
- On successful submission:
  - Displays a success message.
  - Resets the form fields.

### ℹ️ About Us Page

- Developed a static `/about` page containing:
  - Information about the application.
  - Developer details.
  - A favorite Rick & Morty quote.

### 🧹 Code Quality

- Maintained a clean code structure with reusable components (e.g., `CharacterCard`).
- Added meaningful comments and used descriptive variable and function names.
- Ensured consistent formatting throughout the codebase.

---

## API Reference

- List characters:  
  <https://rickandmortyapi.com/api/character>

- Search by name:  
  <https://rickandmortyapi.com/api/character/?name=rick>

- Filter by status:  
  <https://rickandmortyapi.com/api/character/?status>

## Recommeded Project Structure (Optional and Flexible)

To keep your project organized, consider the following structure:

- `src/assets`: Static assets (e.g., images, icons)
- `src/common`: Common utilities and constants (e.g., API endpoints, constants, apis)
- `src/components`: Reusable components (e.g., CharacterCard, SearchBar, FilterDropdown)
- `src/config`: Configuration files (e.g., API configuration or app settings)
- `src/context`: Context providers (e.g., ThemeContext, FilterContext)
- `src/features`: Feature-specific components (e.g., CharacterList, CharacterDetails, ContactForm)
- `src/pages`: Page components (e.g., HomePage, CharacterDetailsPage, ContactPage, AboutPage)
- `src/hooks`: Custom hooks (e.g., useFetchCharacters, useQueryParams)
- `src/utils`: Utility functions (e.g., formatCharacterData, validateEmail)
- `src/styles`: CSS files or styled components
- `src/routes`: Route definitions (e.g., AppRouter)
