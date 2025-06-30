# CSE 3100: Assignment 1 - Rick & Morty Explorer
**Summary of Implemented Features**
**Dynamic Character Details Page:** Users can click on any character's "view details" from the main list to navigate to a unique, detailed page for that character.
-   **Filtering Options:** The main page includes two filters that work together:
    -   A search box to filter characters by name.
    -   A dropdown menu to filter characters by status (Alive, Dead, Unknown).
-   **Numbered Pagination:** Displaying exactly 10 characters per page.
-   **Static Pages:** Fully styled "About Us" and "Contact Us" pages.
-   **Tried to maintain the quality of the code:** The project includes clear comments, and error/loading states for a professional user experience.

### **Additional Improvements**

-   **Cohesive UI/UX Theme:** Implemented a consistent and visually appealing design theme.
-   **Responsive Design:** The layout uses Bootstrap's grid system and custom CSS to ensure it is usable on various screen sizes, from mobile to desktop.
-   **Robust Error Handling:** The application handles API errors (like 404 Not Found) and displays user-friendly loading and error messages.

---

### **Setup and Run Instructions**

To run this project locally, please follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ssmitu/cse-3100.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd cse-3100
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    ```
5.  Open the port specified in your terminal to view it in the browser.

---

### **Known Issues or Limitations**

-   The public Rick and Morty API has a fixed response size of 20 items per page and does not support changing this. To meet the 10-item-per-page requirement, the application fetches 20 items and uses custom logic to slice the results into two separate display pages. This is a workaround for the API's limitation.

---

### **Notes for the Instructor**

I think it was a practical project for learning how to connect a React frontend with a third-party API and manage complex state. 

---
### **WakaTime badge**
[![wakatime](https://wakatime.com/badge/user/477f582d-9b20-4035-93b6-873e173f480d/project/8c7de9b9-035c-4dcc-83f3-9c5807330780.svg)](https://wakatime.com/badge/user/477f582d-9b20-4035-93b6-873e173f480d/project/8c7de9b9-035c-4dcc-83f3-9c5807330780)
---

### **AI Tool Usage**

-   **AI Tool Used:** I used Google AI studio's Gemini 2.5 pro
-   **How it was used:**
    -   To brainstorm and debug complex logic, particularly for the 10-item pagination workaround.
    -   Got some help with the CSS styles.
    -   To fix some errors.
    -   To get feedback on design choices and make iterative improvements.