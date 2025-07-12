# Rick & Morty Explorer

## Summary of Implemented Features

- Character Details Page with dynamic routing showing:
  - Name, Image, Status, Species, Origin, Last known location, Number of episodes
  - Bonus: Episode titles fetched and displayed
- Search and Filter functionality on the Home page:
  - Search by name
  - Filter by status (Alive, Dead, Unknown)
  - Filters persist in URL query parameters
- Pagination with Next and Previous buttons, 10 characters per page
- Contact Us page with form validation and success message
- About Us static page with app info, developer, and favorite quote
- Dark/Light mode toggle with theme persistence using Context and localStorage
- Search and filter preferences persist in localStorage

## Setup and Run Instructions

1. Clone the repository and checkout the assignment-1 branch:

```bash
git clone git@github.com:parvez-ahammed/cse-3100.git
cd cse-3100
git checkout assignment-1
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open the app in your browser at the provided localhost URL.

## Known Issues or Limitations

- No backend for contact form; submission only shows success message without sending data.
- Episode titles fetching may cause slight delay on character detail page.

## Notes for the Instructor

- The app uses React Router for routing and React Context for theme management.
- LocalStorage is used to persist user preferences for theme and filters.
- The app is styled with CSS variables supporting dark and light themes.

## AI Tool Usage

- Used BLACKBOXAI to assist with code review, refactoring, and adding features.
- AI was used to generate context-aware code edits and ensure best practices.
