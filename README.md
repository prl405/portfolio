# Portfolio Website

A modern, minimalist portfolio website built with React, TypeScript, and Vite. Deployable as a GitHub Pages site.

## Features

- **Responsive Design**: Works seamlessly across all device sizes
- **Modern Minimal Theme**: Black and white color scheme with tasteful accents
- **Smooth Navigation**: Sticky header with smooth scroll navigation
- **Animated Elements**: Cursor box animation on job title, timeline animations on scroll
- **Multiple Sections**: About, Experience, Skills, and Projects
- **Mobile-First**: Hamburger menu for smaller screens
- **Professional Styling**: Consistent, polished design throughout

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: CSS with responsive design patterns
- **Testing**: Vitest with React Testing Library
- **Deployment**: GitHub Pages ready

## Project Structure

```
src/
├── components/
│   ├── Navigation/      # Sticky navigation with smooth scrolling
│   ├── About/           # Hero section with intro
│   ├── Experience/      # Timeline of work experience and education
│   ├── Skills/          # Grid of technical skills
│   ├── Projects/        # Portfolio of projects
│   └── Footer/          # Footer with links and socials
├── types/
│   └── index.ts         # TypeScript type definitions
├── __tests__/           # Component unit tests
├── App.tsx              # Main application component
├── App.css              # App-level styles
├── index.css            # Global styles
└── main.tsx             # Application entry point
```

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

## Customization

### Update Personal Information

Edit the components to add your personal information:

- **About**: Update name, job title, bio, and skills in `src/components/About/About.tsx`
- **Experience**: Update work history and education in `src/components/Experience/Experience.tsx`
- **Skills**: Update technical skills in `src/components/Skills/Skills.tsx`
- **Projects**: Update portfolio projects in `src/components/Projects/Projects.tsx`
- **Footer**: Update social links in `src/components/Footer/Footer.tsx`


## Deployment

### GitHub Pages

1. Update `homepage` in `package.json` with your repository URL
2. Build the project: `npm run build`
3. Deploy the `dist` folder to GitHub Pages

## License

This project is open source and available under the MIT License.

  