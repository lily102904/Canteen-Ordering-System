# Canteen-Ordering-System

 Demo And Installation
 Install NodeJs
 Install Visual Studio Code
 Install Git
2. Creating React App
-[] Create React App
-[] Remove Unnecessary Codes
3. Adding Header
 Add Header.js
 Use Header in App.js
 Install react-router-dom in frontend
 Add header.module.css
 Use BrowserRouter inside index.js
 Update Header.js
 Update header.module.css
4. Adding Thumbnails
 Add HomePage component
 Add AppRoutes component
 Use AppRoutes in App.js
 Add data.js
 Add food Images
 Add foodService.js
 Update HomePage.js
 Add Reducer
 Load foods
 Add Thumbnails.js
 Add CSS File
 Add Image
 Add Title
 Add Favorite Icon
 Add StarRating.js
 Add Star Images
 Add CSS
 Add Origins
 Add Cook Time
 Add Price.js
 Update CSS File
5. Adding Search
 Add Search Route to AppRoutes.js
 Add Search function to foodService.js
 Use Search Inside HomePage.js
 Add Search Component
 Add CSS
6.Adding Tags Bar
Showing The Tags:
 Add sample_tags to data.js
 Add getAllTags function to foodService.js
 Add Tags Component
 Add Css
 Use Tags Component in HomePage.js
Showing Foods By Tag
 Add Tag route to AppRoutes.js
 Add getAllByTag function to foodService.js
 Use tag param in HomePage.js
7. Food Page
 Create FoodPage Component
 Add route to AppRoutes.js
 Add getById function to foodService.js
 Update FoodPage Component
 Load food
 Create Template
 Add Css
8. Cart Page
 Create Cart Page Component
 Create css
 Add cart route to the Routes
 Create useCart Hook
 Add CartProvider to index.js
 Initialize cart with sample foods
 Update Cart Page Compnent
 useCart hook
 Add Title Component
 Add JSX
 Add CSS
 Update useCart Hook
 Add to cart
 Remove from cart
 Change quantity
 Saving To LocalStorage
 In Food Page useCart for Add to cart buttons
 In Header useCart for cart total count
9.Not Found!
 Create NotFound Component
 Add CSS
 Add Not Found To:
 Home Page
 Food Page
 Cart Page
 Fixing Search Issue
10. Connect To Backend
 Create backend folder
 Initializing NPM Project
 Copy data.ts to backend/src
 npm install express cors
 Create .gitignore
 Create server.js
 Add & Config Express
 Add & Config Cors
 Add Food Router
 Add jsconfig.json
 Add Apis
 npm install nodemon
 Add dev Script into the package.json
 npm run dev
 Add axios package
 axiosConfig.js file
 Connect food service to the Apis
11. Login Page
Backend
 Create User Router
 npm install jsonwebtoken
 Add Login Api
 Add sample_users to data.js
 Add httpStatus.js
 Add generateTokenResponse function
 Add User Router To server.js
Frontend
 Create user service
 Add getUser function
 Add login function
 Add logout function
 npm install react-toastify
 Create useAuth hook
 Add user state
 Add Login function
 Add logout function
 Create LoginPage component
 Add to AppRoutes.js
 Create Custom Components
 Input Container
 CSS
 Input
 CSS
 Button
 CSS
 Add useAuth to the Header component
12. Connecting MongoDB
Installation
 Install Mongo Db Community
 Windows
 Macos
Coding
 Install mongoose
 Add User Model
 Add Food Model
 Add .env file
 Install dotenv
 Add MONGO_URI
 Add to .gitignore
 Add database.config.js
 Connect to mongodb
 Seed Users
 Install bcryptjs for password hashing
 Seed Foods
 Update user.router ( Using UserModel)
 Install express-async-handler
 Login Api
 generateTokenResponse
 Update food.router (Using FoodModel):
 Root Api ( Loading all foods )
 Tags api
 Search Api
 FoodId api ( Finding food by id )
 Fix Image url in:
 Thumnails compnent
 Food Page component
 Cart Page component
13. Register Page
 Add Register Page Component
 Add to AppRoutes
 Add Link to login page
 CSS
 Add '/register' api to user.router.js
 Add register function in userService
 Add register function in useAuth hook
 Add to Register page
14. Loading
 Create useLoading hook
 Add LoadingProvider to index.js
 Create Loading component
 Add to App.js
 Add Image
 CSS
 Create Loading Interceptor
15. Checkout Page
 Fixing Loading problem

 Create Checkout Page component

 Create AuthRoute
 Add to Routes
 Add css
 Create Order Items List
 Create Maps Component
 Install leaflet & react-leaflet
 Adding images to public folder
 Fixing header menu problem with map
 Create Order router

 Create auth middleware
 Add UNAUTHORIZED http statuss
 Add to Order router
 Create Order Model
 Create Order Status
 Add to server.js
 Connecting Frontend to Backend

 Create order service
 Add create function
 Create Auth interceptor
 Add to index.js
16. Payment Page
 Create PaymentPage component
 Add to Routes
 CSS
 Update Order Router
 Add newOrderForCurrentUser
 Add pay api
 Create PaypalButtons Component
 npm install @paypal/react-paypal-js
 Add clearCart to useCart
 Get clientId
 Create Sandbox user for testing
17. Order Track Page
 Create Order Track Page
 Add To Routes
 CSS
 Create DateTime Component
 Complete
 Map
 Fixing Marker Icon Issue
 Complete
 Order Router
 Add ‘track/:id’ api
 Add to orderService
18.Profile Page
 Create ProfilePage Component
 CSS
 Update Profile
 ChangePassword component
 Update useAuth hook
 Add updateProfile function
 Add changePassword function
 Update userService
 Add updateProfile funciton
 Add changePassword function
 Update User Router
 Add updateProfile api
 Add changePassword api
19. Orders Page
 Create Orders Page
 Add To Routes
 CSS
 Update Order Service
 Add getAll function
 Add getAllStatus function
 Update Order Router
 Add /:status?
 Add /allStatus/:id
