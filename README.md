Go Kitchen: Project Documentation
1. Overview
Go Kitchen is a modern, single-page web application for a virtual restaurant. It provides a seamless and interactive user experience for browsing a diverse menu, placing orders, and getting culinary questions answered by an AI-powered assistant. The application also includes a complete administrative dashboard for managing menu items and their stock availability.
2. Key Features
Dynamic Menu: A filterable and searchable menu with categories for different cuisines.
Shopping Cart: Users can add/remove items and update quantities.
Favorites System: Users can mark their favorite dishes, which are saved locally.
Checkout Process: A multi-step checkout form with mock payment options.
Live Order Tracking: A success modal that displays the real-time status of an order (Preparing, Out for Delivery, Delivered).
User Authentication: A modal-based system for user Sign-In and Sign-Up.
Admin Dashboard: A protected route for administrators (admin@gokitchen.com) to:
Add new items to the menu.
Manage the stock status (isInStock) of all existing items.
AI-Powered Chatbot: A conversational assistant, powered by the Google Gemini API, to help users with questions about the menu.
Static Pages: Includes pages for Subscriptions, a Blog, and an About Us section.
Responsive Design: A fully responsive and mobile-friendly interface built with Tailwind CSS.
Toast Notifications: Non-intrusive pop-up messages for user feedback (e.g., adding to favorites, canceling an order).
3. Technology Stack
Frontend Library: React 19
Language: TypeScript
Styling: Tailwind CSS (used via a CDN for simplicity).
AI/LLM: Google Gemini API (@google/genai) for the chatbot functionality.
Module Loading: The project uses a modern importmap setup in index.html to load React and other dependencies directly in the browser, avoiding the need for a traditional build step (like Webpack or Vite).
4. Project Structure
The project is organized into several key files and directories:
code
Code
.
├── index.html              # Main HTML entry point, includes importmap and Tailwind setup.
├── index.tsx               # Root of the React application.
├── metadata.json           # Application metadata.
├── App.tsx                 # The core application component, handles all state and logic.
├── types.ts                # Contains all TypeScript type and interface definitions.
├── constants.ts            # Stores static data like initial menu items and blog posts.
├── services/
│   └── geminiService.ts    # Logic for interacting with the Google Gemini API.
└── components/
    ├── Header.tsx          # Top navigation bar.
    ├── Footer.tsx          # Site footer with links.
    ├── HomePage.tsx        # The landing page.
    ├── MenuPage.tsx        # The main menu browsing page.
    ├── MenuItem.tsx        # Card component for a single menu item.
    ├── Cart.tsx            # Shopping cart side panel.
    ├── Checkout.tsx        # Checkout modal.
    ├── OrderSuccess.tsx    # Order confirmation and tracking modal.
    ├── Chatbot.tsx         # The AI assistant component.
    ├── AuthModal.tsx       # Modal for user sign-in and sign-up.
    ├── AdminPage.tsx       # Admin dashboard for managing the menu.
    ├── SubscriptionPage.tsx# Static page for subscription plans.
    ├── BlogPage.tsx        # Static page for blog posts.
    ├── AboutPage.tsx       # Static page with company information.
    ├── ... (and various UI/Icon components)
5. Core Concepts
5.1. State Management
The application employs a centralized "lifted state" pattern. The App.tsx component is the single source of truth and manages all major state variables using React hooks (useState, useCallback, useMemo):
menuItems: The list of all available dishes.
cartItems: The items currently in the user's shopping cart.
currentUser: The logged-in user's information.
currentPage: Controls which "page" or view is currently rendered.
Other states for managing modal visibility (isCartOpen, isCheckoutOpen, etc.).
State is passed down to child components via props, and functions to update the state are also passed down as callbacks (e.g., onAddToCart, onUpdateItems).
5.2. Page Navigation
Navigation is handled by a simple state-based router within App.tsx. The currentPage state variable determines which page component to render. The handleNavigate function updates this state, triggering a re-render to show the new page.
5.3. Admin Functionality
Access to the admin dashboard is restricted. A user is considered an admin if they sign in with the email admin@gokitchen.com. The currentUser object will then have an isAdmin: true property, which conditionally renders the "Admin" link in the header and grants access to the AdminPage component.
6. Key Workflows
6.1. Customer: Placing an Order
A user visits the site and can browse dishes on the Home or Menu pages.
They click the "Add to Cart" button on a MenuItem component. This calls the handleAddToCart function in App.tsx.
The cart (Cart.tsx) opens, showing the added item. The user can adjust quantities or close the cart.
The user clicks "Proceed to Checkout", which closes the cart and opens the Checkout.tsx modal.
After filling in their details, they click "Place Order".
The handlePlaceOrder function in App.tsx is triggered. It clears the cart, generates an order ID, and opens the OrderSuccess.tsx modal.
The OrderSuccess modal shows a live-updating status tracker that simulates the order's progress.
6.2. Administrator: Managing the Menu
The administrator clicks "Sign In" and enters the credentials:
Email: admin@gokitchen.com
Password: (any password will work for this demo)
The Header component now displays an "Admin" link.
Clicking "Admin" navigates them to the AdminPage.tsx component.
On this page, they can:
Add a new item: Fill out the form and submit it.
Manage Stock: Use the toggle switches next to each item in the "Manage Menu Stock" list and click "Save Stock Changes". This calls handleUpdateMenuItems in App.tsx to update the global menu state.
7. Setup and Usage
7.1. Running the Application
This project does not require a complex build process. It can be run by serving the project directory with any simple local web server.
Prerequisites: You need a local web server. If you have Python installed, you can use its built-in server.
Navigate to the project's root directory in your terminal.
Start the server. For example, with Python 3:
code
Bash
python -m http.server
Open your browser and go to http://localhost:8000 (or the port specified by your server).
7.2. Gemini API Key
The AI Chatbot requires a Google Gemini API key to function.
Obtain an API key from Google AI Studio.
The application is coded to read this key from process.env.API_KEY. In a real-world scenario with a build system, you would set this in a .env file. For this project's setup, you would need to find a way to make this variable available to the browser context, which is typically handled by the development server or a build tool. Without it, the chatbot will fail to connect.
lightbulb_tips
Suggestions
