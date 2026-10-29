# PayPal Open Landing Page Clone

A pixel-accurate clone of the PayPal Open landing page, built with React and Vite.

## Tech Stack

- **React 19** — Component-based UI
- **Vite 6** — Fast development build tool
- **JavaScript (JSX)** — Component syntax
- **CSS3** — Styling with responsive design

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── main.jsx                  # Entry point
├── App.jsx                   # Root component
├── index.css                 # Global styles
└── components/
    ├── Header.jsx            # Navigation bar with PayPal logo
    ├── Hero.jsx              # Hero section with title and CTAs
    └── AccountToggle.jsx     # Personal / Business toggle
```

## Features

- Static single-page layout matching the PayPal Open reference design
- Responsive layout (desktop, tablet, mobile)
- Smooth CSS hover effects on all interactive elements
- PayPal logo rendered as inline SVG
- No external dependencies beyond React and Vite
- No navigation, routing, or state changes — purely visual

## License

This project is for educational and demonstration purposes only.
