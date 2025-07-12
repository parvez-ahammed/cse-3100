
## Wakatime Badge

[![wakatime](https://wakatime.com/badge/user/7bff677b-9b77-497c-ba7d-29ffc0f02148/project/5a957cb7-f83c-424e-9c9b-fb6020734b8e.svg)](https://wakatime.com/badge/user/7bff677b-9b77-497c-ba7d-29ffc0f02148/project/5a957cb7-f83c-424e-9c9b-fb6020734b8e)

---

## ✅ Summary of Implemented Features

- ✅ **Character Details Page**: Dynamic routing to `/character/:id` with full details including name, status, species, gender, origin, location, and episode count.
- ✅ **Search + Filter**: Search box to filter characters by name, and dropdown to filter by status (Alive, Dead, Unknown). Both use query parameters to persist filters in the URL.
- ✅ **Pagination**: "Next" and "Previous" buttons to navigate through characters, 10 per page using API’s pagination feature.
- ✅ **Contact Us Page**: `/contact` route with a form (name, email, message). Includes form validation and success message on submit.
- ✅ **About Us Page**: `/about` static page with app information, developer details, and favorite Rick & Morty quote.
- ✅ **Code Quality**: Modular components (`CharacterCard`, etc.), clean folder structure, semantic naming, and comments where necessary.

---

## ✨ Additional Improvements Made

- Improved layout and responsiveness (5-character grid per row).
- Centralized layout with spacing on both sides for better UI.
- Stylish navbar with consistent buttons linking to Home, About Us, and Contact.
- Compact homepage layout to avoid vertical scrolling.
- Pagination styling fixed for better visibility.
- Refactored About and Contact pages to integrate smoothly into the app layout.

---
## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone git@github.com:parvez-ahammed/cse-3100.git
cd cse-3100
git checkout assignment-1

---
## 2. Known Issues / Limitations
The Contact form currently logs data to the console (no backend submission).

No dark/light mode toggle (optional bonus not implemented).

Filtering doesn’t support debounce for search input (performance on fast typing may lag).

Limited episode data; only episode count shown for characters.

---

### 3. Notes for the Instructor
All features as per the assignment instructions have been implemented.

UI closely matches the shared screenshot designs.

Extra care was taken to improve usability, maintain clean structure, and keep code modular and readable.

Please check /character/:id, /about, and /contact for full implementation coverage.



### 4. Tool Used: ChatGPT (GPT-4o, via OpenAI)

Purpose:

Assisted in code refactoring and layout adjustments.

Helped debug styling inconsistencies and component reusability.

Used for README structure and wording polish (this file).