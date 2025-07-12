# Rick & Morty Explorer 🛸

An interactive React application for exploring characters from the Rick and Morty universe using the public [Rick and Morty API](https://rickandmortyapi.com/). Built with React, Tailwind CSS, and React Router.

---

## Wakatime Stats
Wakatime stats Link: https://wakatime.com/@cecc9ca2-fced-44a8-af23-56ed7c3bd08a/projects/wtblbzmqjl

## ✅ Features Implemented

- 🔍 **Search Filter** — Search characters by name.
- 🧟 **Status Filter** — Filter characters by status: Alive, Dead, or Unknown.
- 📄 **Pagination** — Smooth client-side pagination using `react-paginate`, 10 characters per page.
- 🌐 **Dynamic Routing** — Click on any character card to navigate to a detailed page.
- 🖼️ **Character Detail Page** — Includes:
  - Character image
  - Name, Status, Species
  - Origin & last known location
  - List of episode names (fetched dynamically)
- ⚛️ **Framer Motion Animations** — Smooth animated transitions between paginated views.
- 🔁 **Filters Persist via URL** — All filters and pagination state are reflected in the URL (e.g., `?name=rick&status=alive&page=2`).
- 📬 **Contact Form** — Validated form using controlled components and success message on submission.
- 🧭 **Navbar** — Responsive navbar with route links and hover animations.

---

## 🌟 Additional Improvements

- ✨ **Responsive Layout** — Fully responsive using Tailwind's utility-first classes.
- 🚫 **Error Handling** — Graceful UI fallback if no results are found or fetch fails.
- 🎨 **Reusable Components** — Components like `CharacterCard`, `Filter`, `Spinner` created for modularity.
- ⚡ **Loading States** — Shows animated spinner while data is loading.

---

## 🐞 Known Issues / Limitations

- ❌ **Dark Theme** is **not yet implemented**. The toggle icon is in place, but global dark styles are not applied across components.
- ⚠️ API errors (e.g., invalid query params) show empty results but not detailed messages.
- 📱 On very small screens, character cards may overflow slightly before wrapping.

---

## 📝 Notes for the Instructor

- All core functionality is complete and working.
- Focused on code readability and UI responsiveness.
- Routing and pagination logic was implemented using best practices and URL syncing.
- Framer Motion was used to enhance user experience with smooth transitions.
- Validation and controlled components are used in the contact form.
- Tailwind CSS is used with class-based dark mode strategy (not yet wired in fully).


## 🛠️ Setup & Run Instructions

### 1. Clone the repository

```bash
git clone https://github.com/0Nafi0/rick-and-morty-explorer.git
cd rick-and-morty-explorer
