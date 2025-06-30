# Rick & Morty Explorer – Assignment 1

A React website that fetches and displays characters from the [Rick & Morty API](https://rickandmortyapi.com/), with search, filtering, and pagination.

![Preview](https://github.com/user-attachments/assets/8a337959-170f-494d-af3d-cecb144a8c1e)
![Preview](https://github.com/user-attachments/assets/87f88bc8-789b-4569-a57c-d9be80ac7cec)
![Preview](https://github.com/user-attachments/assets/4d5e3ba2-046b-457a-842c-df68c3a643d5)

## Features

### 1. **Character Details Page**  
- Dynamic routes (e.g., `/character/1`) showing:  
  - Name, image, status, species, origin, last location, and episode count.  

### 2. **Search & Filter**  
- **Search**: Filter characters by name.  
- **Dropdown**: Filter by status (`Alive`, `Dead`, `Unknown`).  
- URL persistence: `?name=rick&status=alive`.  

### 3. **Pagination**  
- Next/Previous buttons (10 characters per page).  
- Disabled buttons at page limits.  

### 4. **Contact Us Page** (`/contact`)  
- Form with validation (name, email, message).  
- Success message on submit.  

### 5. **About Us Page** (`/about`)  
- Static page with app info and a favorite R&M quote.  

### Bonus (Optional)  
- Episode titles in character details.  
- `localStorage` for saved filters.  

## Technologies  
- React  
- React Router (dynamic routing)  
- Fetch API  
- CSS/JSX 

## Improvements & Limitations  
### **Enhancements**  
- **UI**: Replaced Bootstrap with Tailwind for cohesive theme (glow animations, frosted glass effects).  
- **Performance**: Skeleton loading during API fetches.  
- **Persistence**: Filters survive page refreshes via `localStorage`.  

### **Known Issues**  
- Could not implement dark mode. Long time usage may strain your eyes.  

### **Instructor Notes**  
- **Focus Areas**:  
  - `useLocalStorage` hook implementation.  
  - Pagination logic (frontend/API page mapping).  
  - Theme consistency across components.  
- **Bonus**: Episode list fetches in `CharacterDetail` (extra API calls).  

## AI Tool Usage

### ChatGPT & DeepSeek
- **Primary Use**: Frontend implementation assistance
- **Specific Contributions**:
  - Generated React component templates
  - Provided Tailwind CSS configuration suggestions
  - Assisted with complex function logic (pagination, localStorage hooks)
  - Suggested animation implementations

### Human Development
- **Original Contributions**:
  - Designed all visual concepts and UI/UX flow
  - Created custom color palette (#02afc5 teal + lime theme)
  - Architected component structure
  - Made all final implementation decisions

## Key Notes:
- All AI-generated code was manually reviewed and modified
- Design integrity maintained through original vision
- Critical functions were developed collaboratively with AI


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
git clone git@github.com:parvez-ahammed/cse-3100.git
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
