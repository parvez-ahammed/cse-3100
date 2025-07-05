# Rick & Morty Explorer - Assignment 1

## Summary of Implemented Features
- Used a custom pagination system using the built-in API to show 10 characters per page.
- Characters may be filtered by name or status(Alive, Dead or Unknown).
- Clicking the "View Details" button dynamically routes to a separate page containing detailed information about that particular character.
- There are "Contact" and "About Us" buttons at the top of the home page. Clicking them leads to opening the Contact or About Us page 
- "About Us" page displays details about the application, developer and a favorite Rick and Morty quote
- "Contact" page contains a form where users can input their name, email and message they would like to send.
  
## Additional Improvements
- Enhanced user interface for better usability.
- Added inline documentation and comments.
- Added a Light/Dark Toggle button at the top of the home page which changes the theme from light to dark or vice-versa.

## Setup and Run Instructions
1. Clone the Repository
Fork the base repository. Then, clone the forked repository to your local machine and switch to the branch assignment-1

git clone git@github.com:parvez-ahammed/cse-3100.git
cd cse-3100
git checkout assignment-1

2. Install Dependencies
Run the following to install npm dependencies

npm install

3. Run the Development Server
npm run dev

## Known Issues and Limitations
- Couldn't implement the Dark/Light toggle buttons in all the pages. The button is in the "Home" page only.
- Some features may not be fully optimized for all platforms.
- There are might be some issues with the pagination feature. 

## Notes for the Instructor
- All required features are implemented and tested.
- Feedback on code structure and efficiency is welcome.

## AI Tool Usage
- ChatGPT : Used to style the pages, debug code.
- Copilot : Code completions and imports.
