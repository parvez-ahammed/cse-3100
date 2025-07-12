# Rick & Morty Explorer – Assignment 1

## Branch Assignment-1-20220204030

## Waka Time

[![wakatime](https://wakatime.com/badge/user/39d763b5-f8e6-493a-a90e-eb3b84fb5534/project/1d4838e3-fc12-44a4-a90e-e879478c3e74.svg)](https://wakatime.com/badge/user/39d763b5-f8e6-493a-a90e-eb3b84fb5534/project/1d4838e3-fc12-44a4-a90e-e879478c3e74)

This project is a React-based single-page application that uses the public **Rick and Morty API**. Users can browse, filter, and view detailed information about characters from the Rick and Morty universe.

---

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/IFTI612/cse-3100.git
cd cse-3100
git checkout assignment-1-20220204030
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

### 1. Character Details Page

On the main list, clicking a character can navigate to a dynamic route (e.g., /character/1) and display:

- Name
- Image
- Status
- Species
- Origin
- Last known location
- Number of episodes they appeared in

Used React Router’s dynamic routing with the character ID.

### 2. Search + Filter Functionality

- Added a search box to filter characters by name.

- Added a dropdown to filter by status (Alive, Dead, Unknown).

- Filters work together and persist in the URL via query parameters (e.g., ?name=rick&status=alive).

### 3. Pagination

- Used the API’s built-in pagination (?page=2) to add a “Next” and “Previous” button at the bottom.

- Prevent going past first/last page.

### 4. Contact Us Page

A separate route /contact with a form that includes:

- Name
- Email
- Message
- Submit button
- Form validation (e.g., required fields, valid email format)
- On submit, display a success message and reset the form.

### 5. About Us Page

Static page /about with:

- Info about the app
- Developer
- Favorite Rick & Morty quote

## Project Screen Shots

### Home Page

![homePage1](https://github.com/IFTI612/cse-3100/blob/assignment-1-20220204030/src/assets/project_ss/home1.PNG)

![homePage2](https://github.com/IFTI612/cse-3100/blob/assignment-1-20220204030/src/assets/project_ss/home2.PNG)

### About Page

![about](https://github.com/IFTI612/cse-3100/blob/assignment-1-20220204030/src/assets/project_ss/about.PNG)

### Contact Us Page

![contact](https://github.com/IFTI612/cse-3100/blob/assignment-1-20220204030/src/assets/project_ss/contact.PNG)

### Character Details Page

![charDetails](https://github.com/IFTI612/cse-3100/blob/assignment-1-20220204030/src/assets/project_ss/charDetails.PNG)

**When / How I used AI:**

- To Understand a Complex code
- To Genarate Clean Code
- Generate Rick & Morty quote and different text
- To help in debugging and refactoring
