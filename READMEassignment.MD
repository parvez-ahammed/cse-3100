# Rick & Morty Explorer - Additional Features and Functionality

This document summarizes the additional features added to the Rick & Morty Explorer application and their functionality.

## Features Added

1. **Character Details Page**  
   - Clicking on a character in the main list navigates to a dynamic route (e.g., `/character/1`).  
   - Displays detailed information about the character including:  
     - Name  
     - Image  
     - Status  
     - Species  
     - Origin  
     - Last known location  
     - Number of episodes appeared in  

2. **Search and Filter Functionality**  
   - Search box to filter characters by name.  
   - Dropdown filter to filter characters by status (Alive, Dead, Unknown).  
   - Filters work together and persist in the URL via query parameters (e.g., `?name=rick&status=alive`).  

3. **Pagination**  
   - Pagination controls with "Next" and "Previous" buttons to navigate through pages.  
   - Shows 10 characters per page.  
   - Prevents navigation beyond the first and last pages.  

4. **Contact Us Page**  
   - Separate route `/contact` with a contact form.  
   - Form includes fields for Name, Email, and Message.  
   - Form validation for required fields and valid email format.  
   - Displays a success message and resets the form upon submission.  

5. **About Us Page**  
   - Static route `/about` with information about the app, developer, and a favorite Rick & Morty quote.  

6. **Code Quality Improvements**  
   - Clean and modular code structure.  
   - Reusable components such as CharacterCard, SearchBar, and FilterDropdown.  
   - Proper comments, meaningful variable names, and consistent formatting.  

## Summary

These features enhance the user experience by providing detailed character information, flexible search and filtering options, easy navigation through pagination, and additional informational pages. The code quality improvements ensure maintainability and scalability of the application.


To open the project in your code editor, navigate to the project directory and run the following command:
cd cse-3100
npm run dev

Ai was used to generate the base code and css styling.Ai name was grok,deepseek.it was also used to create the file structure

