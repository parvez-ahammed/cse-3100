# Rick & Morty Explorer

A React web application for exploring Rick and Morty characters using the Rick and Morty API.

## 1. Summary of Implemented Features

- **Character Search**: Search by name with real-time filtering
- **Status Filter**: Filter by Alive, Dead, Unknown, or All
- **Advanced Pagination**: Numbered pages (1,2,3...) with Prev/Next buttons
- **Character Cards**: Display character info with images
- **Responsive Design**: Mobile-friendly layout
- **URL State**: Preserves filters and page in URL parameters

## 2. Additional Improvements Made

- **Enhanced Pagination**: Smart page display with ellipsis (...) and first/last page access
- **Better UX**: Active page highlighting and disabled button states
- **Code Quality**: Clean component structure and efficient API calls


## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/adnan-mitul/cse-3100.git
cd cse-3100
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

## 4. Known Issues or Limitations

- **API**: Rate limiting
- **Features**: No character details page, no caching, no loading states
- **Performance**: May be slow with large result sets
- **Browser**: Requires modern browsers with ES6+ support

## 5. Notes for the Instructor

### Key Learning Objectives
- React Hooks (useState, useEffect)
- API integration and data fetching
- URL state management with useSearchParams
- Component architecture and reusability
- Responsive design with Tailwind CSS

### Advanced Features
- Custom pagination logic with mathematical calculations
- State synchronization between URL and components
- Conditional rendering and error handling
- Performance optimization for API calls


---
**API Source**: [Rick and Morty API](https://rickandmortyapi.com/)  
**Framework**: React 18+ with React Router DOM

## AI Use

## Claude AI
• Advanced Pagination Implementation
• Component Architecture & Code Structure
• Tailwind CSS Styling & Responsive Design
• Fixing Bugs and create ReadMefile

## ChatGPT
• For fixing git and github related problems
• To make a perfect project structure guideline

## ⏱ WakaTime Coding Stats

Track my real-time coding activity for this project using WakaTime:

🔗 [View WakaTime Report (July 7–13, 2025)](https://wakatime.com/@1d4eaca5-11b0-43b9-aa7d-db7a796e2f13/projects/ykykgttsfj?start=2025-07-07&end=2025-07-13)

> Includes time spent writing code, editing files, and working on features during this week.

## API Reference

- List characters:  
  <https://rickandmortyapi.com/api/character>

- Search by name:  
  <https://rickandmortyapi.com/api/character/?name=rick>

- Filter by status:  
  <https://rickandmortyapi.com/api/character/?status>



