# Rick & Morty Explorer 🚀

A single-page React app built as part of the \*\*CSE-3100 Assignment-20220204053.  
It uses the public [Rick and Morty API](https://rickandmortyapi.com/) to fetch and display character data with filtering, pagination, and routing features.

---

## Implemented Features

### 1. Character Details Page

- Click on any character to view full details in a separate page.
- Route: `/character/:id`
- Details shown: name, image, gender, status, origin, species, and location.

### 2. Filtering Options

- **Search bar** to filter characters by name (case-insensitive).
- **Dropdown** to filter characters by status ('All status','Alive', 'Dead, 'unknown').
- Filters can be used together.

### 3. 📄 Pagination

- Characters are shown 10 per page.
- “Next” and “Previous” buttons are available and auto-disabled on first/last page.

### 4. 📬 Contact Us Page

- Route: '/contact'
- Includes a form with Name, Email, and Message fields.

### 5. ℹ️ About Us Page

- Route: '/about'
- Static page with description of the project.

### **Code Quality**

Clean structure, reusable components, and added comments

---

## 🛠 Technologies Used

- React (Functional components + Hooks)
- React Router DOM (Routing)
- Fetch API (for consuming Rick & Morty API)
- VS Code + WakaTime for tracking time

---

## Setup & Run Instructions

1. **Clone the repository**
   '''bash
   git clone https://github.com/<arany677>/cse-3100.git
   cd cse-3100

2. Checkout the assignment branch:
   git checkout assignment-1
   git checkout -b assignment-1-20220204053

3. Install dependencies:
   npm install

4. Run the project:
   npm run dev

### Additional Improvements Made :

--Organized file structure for scalability

--Responsive design adjustments for smaller screens

--Used environment-friendly API handling (loading states, error checks)

### Known Issues or Limitations:

--The contact form is static and doesn’t send data

--No filter reset button

--Responsiveness is basic and may need improvement on tablets

### Notes for the Instructor:

--All 6 required features are implemented

--Functional on Chrome, Firefox, and Edge

--All React features were used following best practices

--All time was tracked using WakaTime

### Time Tracking (WakaTime):

Tool Used: WakaTime (VS Code Extension)
Total Tracked Time:

### Screen Shoot:

![alt text](<Screenshot 2025-07-05 212121.png>)

### AI Tool Usage:

Tools Used:

--ChatGPT (OpenAI)

### How They Were Used:

ChatGPT was used to:

--Understand how to implement filtering with controlled components

--Design pagination logic using React states and URL parameters

All generated code was reviewed, edited, and customized before final use.

### Student Info:

Name: Arany Hasan
Student ID: 20220204053
University: Ahsanullah University of Science and Technology
Course: Web Application Development with DevOps (CSE-3100)
