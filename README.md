## Personal portfolio website
A responsive and interactive portfolio website built with HTML, CSS, and JavaScript.  
This project showcases skills, projects, and includes a contact form with validation.



## Project Overview

- Create a responsive personal portfolio website.

- Showcase education, skills, internship experience, and profile links (LinkedIn, GitHub, LeetCode).

- Provide a contact form with validation and dark mode toggle.

- Ensure compatibility across desktop, tablet, and mobile devices.

## Objective

The main objective of this project is to create a personal portfolio website using HTML and CSS. This website helps to showcase my education, skills, internship experience, and contact details.


## Setup Instructions
1. Install prerequisites:
- Any modern browser (Chrome, Edge, Firefox, Safari).
- (Optional) VS Code with Live Server extension.

2. Clone the repository:
- git clone https://github.com/Yogesh123-crt/portfolio.git

3. Navigate to the project folder:
- cd portfolio
4. Open index.html in your browser.

5. (Optional) Run with Live Server in VS Code for auto reload.

6. Check responsiveness:

- Open browser DevTools - Toggle Device Toolbar.

- Test on Android, iPhone, Pixel, Tablet, and Desktop views.

## Code Structure
File hierarchy:

- index.html        # Main HTML structure
- main.css          # Base styles, variables, typography
- layout.css        # Grid, flexbox, positioning, sidebar/hamburger
- animations.css    # Hover effects, transitions, keyframes
- script.js         # Dark mode toggle, menu toggle, form validation
- Image.jpeg        # Profile image
- README.md         # Documentation

## Visual Documentation
Screenshots demonstrating functionality:

-Homepage with header, sidebar, and hero text.

-About section with profile image and education details.

-Skills section in responsive grid layout.

-Contact form with validation messages.

-Dark mode enabled view.

## Features

- Header section with name and navigation menu
- About Me section with profile image
- Skills section using list/grid layout
- Contact section with form
- External icons for LinkedIn, GitHub, and LeetCode
- Hover effects on navigation links, buttons, image, and skills
- Responsive design for mobile screens
- Simple animation using CSS
- Responsive design with modern UI
- Dark mode toggle (saved in LocalStorage)
- Interactive navigation menu (☰ toggle)
- Skills section with show/hide functionality
- Contact form validation with error messages
- Smooth animations and hover effects


## Technologies Used

## HTML concepts
Semantic tags: `<header>`, `<section>`, `<footer>`
- Navigation menu with `<nav>` and `<ul>`
- Contact form with `<form>`, `<input>`, `<textarea>`
- Profile image with `<img>`
- Navigation Menu -  open/close hamburger (☰) with buttton
- Dark Mode Toggle switch theme 
- Contact Form - error message spans for validation.

## CSS Concepts Used
#main.css
1. Purpose: Base styles, variables, colors, and typography.
Concepts used:

-CSS Variables (--primary-color, --font-size) → reusable theme values

-Root selectors (:root) → global variable scope

-Reset/Normalize styles → consistent default look across browsers

-Typography hierarchy → headings, paragraphs, font families

-Color palette management → light/dark mode support

#layout.css
2. Purpose: Structure and positioning of elements.
Concepts used:

-Advanced Flexbox & Grid Layouts → responsive alignment and spacing

-Positioning (relative, absolute, fixed) → sidebar, navbar, hamburger menu

-Media Queries → adaptive design for mobile and desktop

-Z‑index layering → overlapping elements like modals or menus

-Container & Wrapper classes → maintain consistent layout width

#animations.css
3. Purpose: Interactive and visual effects.
Concepts used:

-Transitions (transition: all 0.3s ease) → smooth hover effects

-Keyframes (@keyframes) → custom animations (fade‑in, slide‑up, pulse)

-Transformations (scale, rotate, translate) → icon and button motion

-Hover & Active states → dynamic user interaction

-Animation timing functions (ease, ease‑in‑out) → natural motion feel

- @media using mobile tablet and desktop responsive layout

## JavaScript concepts
- DOM selection: `getElementById`, `querySelectorAll`
- Event listeners: `click`, `submit`
- DOM manipulation: `classList.toggle`, `textContent`, `style.display`
- Form validation with reusable functions
- LocalStorage for theme persistence

## Testing Evidence
Validation & Test Cases:

- Sidebar toggle works on mobile (hamburger menu opens/closes).

- Dark mode button switches theme correctly and persists via LocalStorage.

- Contact form validation:

Empty fields → error message.

Invalid email → error message.

Valid input → success message.

- Responsive layout tested on:

Android (Pixel, Samsung Galaxy)

iPhone (SE, 12, 14 Pro)

Tablets (iPad, Android tablets)

Desktop (Windows, MacBook)