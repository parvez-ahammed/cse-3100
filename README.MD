# Rick & Morty Explorer 🚀

<img src ='https://i.imgur.com/XV3gnk9.png'>

A React single-page application for exploring characters from the Rick & Morty universe, with search, filtering, and pagination.

---
## Implemented Features

- **Character Browser**  
  - View all characters with images/details  
  - Dynamic routing to character pages (`/character/:id`)  

- **Search & Filters**  
  - Search by name  
  - Filter by status (Alive/Dead/Unknown)  
  - URL-persisted filters  

- **Pagination**  
  - 10 characters per page  
  - Next/Previous buttons  

- **Additional Pages**  
  - Contact form with validation  
  - About page with developer info  

- **UI Enhancements**  
  - Responsive design  
  - MUI components integration  
---
## Additional Improvements

- **Component Modularity**: Created reusable UI components (Search, Pagination)
- **UI Polish**: Implemented MUI for better UI design
- **Form Handling**: Added **Formik** for better form handling

- - -

## Setup and run instructions

### Clone the Repository

Fork the base repository. Then, clone the forked repository to your local machine and switch to the branch assignment-1
```bash
git clone https://github.com/ARDhruvo/cse-3100.git
cd cse-3100
git checkout assignment-1-20220204003
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
### Known Issues

- Pagination shows 10 items but fetches 20 from API
- No loading states during API calls

- - -

## AI Tool Usage

**DeepSeek Chat**: Used for:
- **Formik/Yup** validation in *Contact.jsx*
- **Pagination** logic debugging
- README structure generation

**V0.dev**: Used for:
- CSS cleaning
- **Pagination** update

- - -

_Developed by Md.Aribur Rahman Dhruvo - 20220204003_