# Go Kitchen - Complete Setup Guide

This document contains everything needed to set up and run the Go Kitchen web application locally.

---

## ✅ Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, but recommended) - [Download here](https://git-scm.com/)

### Verify Installation

Run these commands in your terminal to verify:

```bash
node --version
npm --version
```

---

## 📋 Step-by-Step Setup Instructions

### Step 1: Navigate to the Project Directory

```bash
cd "path/to/Go kitchen"
```

### Step 2: Install Dependencies

This will install all required packages listed in `package.json`:

```bash
npm install
```

This installs:
- **React** (v19) - UI library
- **React DOM** (v19) - DOM rendering
- **@google/genai** - Google Generative AI (for Chatbot)
- **Vite** - Development server and build tool
- **TypeScript** - Type checking
- **@vitejs/plugin-react** - React support for Vite

### Step 3: Configure the Gemini API Key

1. Get your Gemini API Key:
   - Visit [Google AI Studio](https://ai.google.dev/)
   - Click on "Get API Key" or "Create new secret key"
   - Copy your API key

2. Set up the `.env.local` file:
   - Open the `.env.local` file in the project root
   - Replace `your_gemini_api_key_here` with your actual API key:
   
   ```
   GEMINI_API_KEY=your_actual_api_key_here
   ```

3. **⚠️ Important Security Note:**
   - Never commit `.env.local` to version control
   - It should be in `.gitignore` (already configured)
   - Keep your API key private and secure

### Step 4: Run the Development Server

Start the application locally:

```bash
npm run dev
```

Expected output:
```
  VITE v6.x.x  ready in 123 ms

  ➜  Local:   http://localhost:3000/
  ➜  press h + enter to show help
```

### Step 5: Open in Browser

Open your browser and navigate to:
```
http://localhost:3000
```

The Go Kitchen application should now be running!

---

## 🎯 Key Features & How to Use

### Home Page
- Browse featured menu items
- Add items to cart
- Mark items as favorites

### Menu Page
- Full menu with all available items
- Filter and search functionality
- Detailed pricing and descriptions

### Cart & Checkout
- Add/remove items from cart
- Adjust quantities
- Complete checkout process

### Authentication
- Sign up with email
- Sign in functionality
- Admin access for special users

### Admin Panel
- Add new menu items
- Update stock status
- Manage menu inventory
- Access: Use email `admin@gokitchen.com` to sign in

### Chatbot
- AI-powered assistance using Google Gemini
- Available on every page
- Helps with menu recommendations and orders

### Additional Pages
- **Blog** - Latest updates and recipes
- **About** - Company information
- **Subscription** - Premium subscription plans (requires login)

---

## 🛠️ Available npm Commands

```bash
# Development - starts the dev server with hot reload
npm run dev

# Build - creates optimized production build
npm run build

# Preview - preview the production build locally
npm run preview
```

---

## 📁 Project Structure

```
Go kitchen/
├── .env.local                 # Environment variables (⚠️ keep secret)
├── index.html                 # Main HTML file
├── index.tsx                  # React entry point
├── App.tsx                    # Main App component
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── package.json              # Project dependencies
├── constants.ts              # Application constants
├── types.ts                  # TypeScript type definitions
├── metadata.json             # App metadata
│
├── components/               # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HomePage.tsx
│   ├── MenuPage.tsx
│   ├── Cart.tsx
│   ├── Checkout.tsx
│   ├── AuthModal.tsx
│   ├── AdminPage.tsx
│   ├── Chatbot.tsx
│   ├── BlogPage.tsx
│   ├── AboutPage.tsx
│   ├── SubscriptionPage.tsx
│   ├── OrderSuccess.tsx
│   ├── MenuItem.tsx
│   ├── ReviewsModal.tsx
│   ├── UserReviews.tsx
│   ├── StarRating.tsx
│   │
│   └── icons/                # Icon components
│       ├── StarIcon.tsx
│       ├── ShoppingCartIcon.tsx
│       ├── ChatIcon.tsx
│       └── ... (other icons)
│
└── services/                 # External services
    └── geminiService.ts      # Google Gemini API integration
```

---

## 🔧 Configuration Files

### `.env.local`
Environment variables for sensitive data:
- `GEMINI_API_KEY` - Your Google Generative AI API key

### `vite.config.ts`
Vite build and dev server configuration:
- Development server runs on port 3000
- React plugin enabled
- Environment variables loaded from `.env.local`
- Path alias `@` for root directory

### `tsconfig.json`
TypeScript configuration:
- Target: ES2022
- Module: ESNext
- JSX: react-jsx
- Strict type checking enabled

### `package.json`
Project metadata and dependencies management

---

## 🐛 Troubleshooting

### Issue: "Cannot find module 'react'"
**Solution:** Run `npm install` to install all dependencies

### Issue: "GEMINI_API_KEY is undefined"
**Solution:** 
- Ensure `.env.local` file exists
- Check that `GEMINI_API_KEY` is set correctly
- Restart the dev server after updating `.env.local`

### Issue: "Port 3000 already in use"
**Solution:** Either:
- Close the application using port 3000
- Or modify the port in `vite.config.ts` (change `port: 3000` to another number)

### Issue: TypeScript compilation errors
**Solution:**
- Run `npm install` to ensure all types are installed
- Clear node_modules and reinstall: `rm -r node_modules && npm install`

### Issue: Chatbot not responding
**Solution:**
- Verify your Gemini API key is valid
- Check that you have API quota remaining on Google AI Studio
- Review browser console for error messages

---

## 📦 Building for Production

To create a production-ready build:

```bash
npm run build
```

This will create an optimized build in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

---

## 🚀 Deploying to Production

Common deployment options:

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy
```

### GitHub Pages
Build and push the `dist/` folder to your repository

---

## 📞 Support & Resources

- **React Documentation:** https://react.dev/
- **Vite Documentation:** https://vitejs.dev/
- **Google Gemini API:** https://ai.google.dev/
- **TypeScript Documentation:** https://www.typescriptlang.org/

---

## ✨ Next Steps

1. ✅ Install dependencies with `npm install`
2. ✅ Add your Gemini API key to `.env.local`
3. ✅ Start dev server with `npm run dev`
4. ✅ Open http://localhost:3000 in your browser
5. 🎉 Enjoy using Go Kitchen!

---

**Happy coding! 🍽️**
