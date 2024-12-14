# Canteen Ordering System

A modern food ordering system built with React, Node.js, and MongoDB, featuring essential functionalities such as search, cart management, loyalty points, and allergy tracking. This project demonstrates a seamless integration of a full-stack application.

## Features
- Fully functional cart and checkout process
- Loyalty points system for frequent customers
- Allergy tracking to enhance food safety
- MongoDB integration with a start.bat script to resolve database startup issues

---

## Checklist

### 1. Demo And Installation
- [x] Install [NodeJs](https://nodejs.org/en)
- [x] Install [Visual Studio Code](https://code.visualstudio.com)
- [x] Install [Git](https://git-scm.com)

### 2. Creating React App
- [x] Create React App
- [x] Remove Unnecessary Codes

### 3. Adding Header
- [x] Add Header.js
- [x] Use Header in App.js
- [x] Install react-router-dom in frontend
- [x] Add header.module.css
- [x] Use BrowserRouter inside index.js

### 4. Adding Thumbnails
- [x] Add HomePage component
- [x] Add AppRoutes component
- [x] Use AppRoutes in App.js
- [x] Add data.js
- [x] Add food Images
- [x] Add foodService.js
- [x] Update HomePage.js
  - [x] Add Reducer
  - [x] Load foods
  - [x] Add Thumbnails.js

### 5. Adding Search
- [x] Add Search Route to AppRoutes.js
- [x] Add Search function to foodService.js
- [x] Use Search Inside HomePage.js
- [x] Add Search Component

### 6. Adding Tags Bar
#### Showing The Tags:
- [x] Add sample_tags to data.js
- [x] Add getAllTags function to foodService.js
- [x] Add Tags Component
- [x] Use Tags Component in HomePage.js

#### Showing Foods By Tag
- [x] Add Tag route to AppRoutes.js
- [x] Add getAllByTag function to foodService.js
- [x] Use tag param in HomePage.js

### 7. Food Page
- [x] Create FoodPage Component
- [x] Add route to AppRoutes.js
- [x] Add getById function to foodService.js
- [x] Update FoodPage Componen

### 8. Cart Page
- [x] Create Cart Page Component
- [x] Add cart route to the Routes
- [x] Create useCart Hook
- [x] Update Cart Page Component
- [x] Update useCart Hook
- [x] In Food Page useCart for Add to cart buttons
- [x] In Header useCart for cart total count

### 9. Not Found!
- [x] Create NotFound Component
- [x] Fix Search Issue

### 10. Connect To Backend
- [x] Create backend folder
- [x] Initialize NPM Project
- [x] Copy data.js to backend/src
- [x] npm install express cors
- [x] Create .gitignore
- [x] Create server.js
- [x] npm install nodemon
- [x] Add axios package
- [x] Connect food service to the APIs

### 11. Allergy Tracking
- [x] Add allergy input in the Register Page

### 12. Loyalty Points
- [x] Create loyalty points feature


### Backend

- [x] Create User Router
- [x] Add User Router To server.js

### Frontend

- [x] Create user service
- [x] npm install react-toastify
- [x] Create useAuth hook
- [x] Create LoginPage component
- [x] Add useAuth to the Header component


### 15. MongoDB Configuration
- [x] Install MongoDB
  - [x] Use `start.bat` script for resolving MongoDB startup issues
- [x] Create database connection script
  - [x] Add environment variables for MongoDB URI
  - [x] Add Mongoose models for User, Food, and Orders



### Coding


## 16. Register Page

- [x] Add Register Page Component
- [x] Add '/register' api to user.router.js
- [x] Add register function in userService
- [x] Add register function in useAuth hook

## 17. Loading

- [x] Create useLoading hook
- [x] Create Loading component
- [x] Create Loading Interceptor

## 18. Checkout Page

- [x] Fixing Loading problem
- [x] Create Checkout Page component
  - [x] Create Order Items List
  - [x] Create Maps Component
    - [x] Install leaflet & react-leaflet
    - [x] Adding images to public folder
    - [x] Fixing header menu problem with map
- [x] Create Order router

  - [x] Create auth middleware
    - [x] Add UNAUTHORIZED http statuss
    - [x] Add to Order router
  - [x] Create Order Model
    - [x] Create Order Status
  - [x] Add to server.js

- [x] Connecting Frontend to Backend
  - [x] Create Auth interceptor

## 19. Payment Page

- [x] Create PaymentPage component
- [x] Update Order Router
- [x] Create PaypalButtons Component

## 20. Order Track Page

- [x] Create Order Track Page
- [x] Order Router

## 21.Profile Page

- [x] Create ProfilePage Component
- [x] Update useAuth hook
- [x] Update userService
- [x] Update User Router

## 22. Orders Page

- [x] Create Orders Page
- [x] Update Order Service
- [x] Update Order Router

## How To Run
1. **Clone the repository**  
   ```bash
   git clone https://github.com/lily102904/Canteen-Ordering-System

2. install dependencies
  npm install

3. Start MongoDB
Run the start.bat file located in the project root.

4. Run the backend
npm run dev

5. Run the frontend
npm start

## Admin deets
- Email: lillian3adunia@gmail.com
- password: 12345

## Hosting Link
https://canteen-ordering-system-frontend.onrender.com/

7. Enjoy the application!!

#Screenshots of my API tests
![alt text](<Screenshot 2024-12-13 192818.png>) 
![alt text](<Screenshot 2024-12-13 194039.png>)
