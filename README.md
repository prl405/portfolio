# Portfolio Website

A modern, minimalist portfolio website built with React, TypeScript, and Vite. Deployable as a GitHub Pages site.

## Features

- **Responsive Design**: Works seamlessly across all device sizes
- **Modern Minimal Theme**: Black and white color scheme with tasteful accents
- **Smooth Navigation**: Sticky header with smooth scroll navigation
- **Animated Elements**: Box animation on job title, timeline animations on scroll
- **Multiple Sections**: About, Experience, Skills, and Projects
- **Mobile-First**: Hamburger menu for smaller screens
- **Professional Styling**: Consistent, polished design throughout

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: CSS with responsive design patterns
- **Testing**: Vitest with React Testing Library
- **Deployment**: GitHub Pages ready


## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Building

Create an optimized production build:

```bash
npm run build
```

### Testing

Run unit tests:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

### Linting

Check code for linting issues:

```bash
npm run lint
```

## Deployment

### GitHub Pages

1. Update `homepage` in `package.json` with your repository URL
2. Build the project: `npm run build`
3. Deploy the `dist` folder to GitHub Pages
