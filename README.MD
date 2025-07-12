# Rick & Morty Explorer – Assignment 1 (README)

In this project, I have tried to build a beautiful and interactive single-page application that allows users to explore, filter, and view details about characters from the Rick and Morty universe using the public Rick and Morty API.

I have applied React and JavaScript skills, routing, API fetching, conditional rendering, and basic UX design.

---

## Wakatime Badge

[![wakatime](https://wakatime.com/badge/user/c224ef0b-0d4e-4d7a-a415-3b36fd0b5fa9/project/3153c9a1-f0b5-4fef-a410-0d3efc3ca626.svg)](https://wakatime.com/badge/user/c224ef0b-0d4e-4d7a-a415-3b36fd0b5fa9/project/3153c9a1-f0b5-4fef-a410-0d3efc3ca626)

## Implemented Features

**Character Details Page Added**
Now the page shows:

- Name
- Image
- Status
- Species
- Origin
- Last known location
- Number of episodes they appeared in

**Search and Filter Option Added**
An user can search for a character by using search bar. Also, they can filter by status (All, Alive, Dead, Unknown). When an user searches for a character then goes to the next page the search query still stays and shows the results according to the query. The filters were added through query parameters.

**Pagination Has Been Implemented**
Before starting the project, the home page showed only first 20 characters. By implementing pagination, an user can see all the characters by going through the pages. As per requirement, only 10 characters are shown in one page. Also, I made sure that, an user cannot go below page 1 and further page 83 (max). There are a couple of buttons below the home page to go to previous or next page.

**Implemented Contact Us page**
In this page there is a form by using which an user can contact with the us. For now, only a confirmation message is shown. But according to the requirement, all the fields have been added. For example: - Name, email, message, submit button, etc.

Also, 'About Us' page has been added.

---

**Setup and Installation**
Assuming the user have installed Node.js, an IDE (like VS Code), to run this website they just have to clone this project/repo and install NPM and TailwindCSS and they are good to go.

**Known Issue**
The interactiveness has some flaws. It needs to be fixed. The code base is also not that modular. Some methods like fetchingCharacters could be extracted from Home.jsx and implemented as hooks. There are many buttons used in this project that could be extracted into one component. Also, some try-catch errors are not shown to the user properly. If there are some server-side problem the user might not know. Dark mode is not added.

**AI Tool Usage**
AI tool has been used to complete this project. For example:

- Home.jsx - API call for search query
- CharacterDetails.jsx - Card structure inspiration
- Contact Us - Validation conditions
- SearchBar component - the whole component
- Pagination - API call
