# Recipe Router App

## Overview

This project is a multi-page React application built using React Router v7 file-based routing. It converts a simple recipe gallery into a structured application with navigation, dynamic routing, and reusable layout components.

Users can:
- View a home page
- Browse a recipe gallery
- Click into individual recipe detail pages

---

## Features

- File-based routing using React Router v7
- Dynamic route handling for recipe details
- Shared global layout with navigation
- TypeScript support
- Responsive recipe gallery layout
- Clean separation of pages and components

---

## Tech Stack

- React
- React Router v7 (file-based routing)
- TypeScript
- Vite

---

## Project Structure


app/
data/
recipes.ts

routes/
_index.tsx
gallery.tsx
recipe.$id.tsx

root.tsx
routes.ts

main.tsx


---

## Routes

| Route | Description |
|------|------------|
| `/` | Home page |
| `/gallery` | Recipe gallery page |
| `/recipe/:id` | Recipe detail page |

---

## Installation

### 1. Install dependencies


npm install


### 2. Run development server


npm run dev


---

## Key Implementation Details

### Home Page
Displays a welcome message and basic navigation context.

### Gallery Page
Displays all recipes as clickable cards. Each card links to a dynamic recipe route.

### Recipe Detail Page
Uses URL parameters to fetch and display a specific recipe including:
- Title
- Image
- Cooking instructions

### Layout
A global navigation bar is included in the root layout and persists across all pages.

---

## Routing Configuration

Routes are defined using `app/routes.ts`:

- Index route (`/`)
- Gallery route (`/gallery`)
- Dynamic recipe route (`/recipe/:id`)

---

## Notes

- Ensure all route files exist in the correct `app/routes` directory
- The project uses React Router file-based routing, not manual router configuration
- The `<Outlet />` component is required in `root.tsx` to render child routes

---

## Troubleshooting

If routes do not load:

- Confirm `app/routes.ts` exists and is correctly formatted
- Ensure `HydratedRouter` is used in `main.tsx`
- Remove any manual `createBrowserRouter` or `RouterProvider` usage
- Restart the dev server after changes

---

## Youtube
