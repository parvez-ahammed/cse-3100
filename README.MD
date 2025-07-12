# Rick & Morty Explorer – Assignment 1

## This project meets all the requied conditions of the Rick & Morty Explorer app for Assignment 1 of the CSE-3100 (Software Development IV) course. Full implemention is done successfully.

##wakatime badge

[![wakatime](https://wakatime.com/badge/user/70cb7d88-dce0-4f4d-ac94-d2f0d4b9ae3b/project/02489e11-8a61-479b-873b-0238e0163cde.svg)](https://wakatime.com/badge/user/70cb7d88-dce0-4f4d-ac94-d2f0d4b9ae3b/project/02489e11-8a61-479b-873b-0238e0163cde)

# Rick and Morty Explorer

A React-based web application that allows users to explore characters from the Rick and Morty universe using the [Rick and Morty API](https://rickandmortyapi.com/).

---

##  Features Implemented

- **Character Listing**:
  - Displays characters fetched from the Rick and Morty API.
  - Pagination implemented with 10 characters per view (local split).
- **Search & Filter**:
  - Search by character name.
  - Filter by character status (Alive, Dead, Unknown).
- **Character Detail Page**:
  - View complete information on selected characters.
  - Dynamic routing with `/character/:id`.
- **Responsive Navbar**:
  - Includes active link underline highlight.
  - Styled with custom colors and Google Fonts.
- **Header Banner**:
  - Custom logo section displayed on the Home page.
- **Contact Page**:
  - Functional contact form with validation.
  - Success message shown after successful submission.
- **About Page**:
  - App description, developer bio, and a favorite Rick & Morty quote.

---

## Additional Improvements

- Fully responsive layout using **Tailwind CSS**.
- Custom **color palette** (Rick's hair, Morty's shirt, portal green, etc.).
- Google Fonts integration (`Poppins`).
- Clean UI with subtle animations and hover effects.
- Enhanced user experience with blur background on character detail.
- Form validation with error display and dynamic handling.
- Integrated **WakaTime** for developer activity tracking.

---

## Setup and Run Instructions

1. **Clone the repository**:
   ````bash
   git clone https://github.com/JerinJalal/cse-3100.git
   **Navigate to the project directory:**
    ```bash
    cd cse-3100
   ````
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open the port specified in your terminal to view it in the browser.

## Known Issues / Limitations

- API returns `404` if search filters don’t match — currently handled with a “No characters found” message.
- No backend or real form submission handling on the Contact page.

## Notes for the Instructor

-This project was built as per the assignment guidelines. It fully meets all functional requirements and -includes multiple additional enhancements for usability, performance, and design. The app demonstrates a -strong understanding of React concepts, component reusability, and user-centric UI.

- This project is submitted as part of **CSE-3100 (Software Development IV)** course.
- **Assignment Objective**: Build a React-based character explorer using an open API.
- code is written by the student and enhanced using **open-source AI tools (ChatGPT)** for suggestions and optimizations.
- Fully meets the assignment requirements and includes additional UI and UX enhancements.

---

### AI Tool Usage

- Tool: OpenAI ChatGPT
- Usage: - Helped with Tailwind CSS UI styling and layout optimization
  -Assisted with code generation - Provided debugging suggestions for Filtering and pagination logic, config issues
  --
### About Developer
- **Developer**: Jerin Jalal  
  **Year/Semester**: 3rd Year, 1st Semester  
  **Department**: CSE  
  **University**: Ahsanullah University of Science and Technology  
  **Lab Group**: A2
  **Student ID**: 20220204039
