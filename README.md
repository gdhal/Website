# Personal Website

A modern, responsive personal website built with React, TypeScript, and Tailwind CSS. Designed for GitHub Pages deployment.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-first approach
- 🔧 Built with React and TypeScript
- 📧 Contact form modal
- 🚀 Optimized for GitHub Pages deployment
- 🎯 Single-page application (no routing)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Customization

### Personal Information

Update the following in `src/App.tsx`:
- Your name and title
- About section content
- Skills and technologies
- Project descriptions
- Contact information

### Styling

The website uses Tailwind CSS. You can customize colors, fonts, and other styles in:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles and custom components

## Deployment

### GitHub Pages

1. Update the `base` property in `vite.config.ts` to match your repository name
2. Push to the `main` branch
3. GitHub Actions will automatically build and deploy to GitHub Pages

### Manual Deployment

```bash
npm run build
npm run deploy
```

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── App.tsx      # Main application component
│   ├── main.tsx     # Application entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
└── package.json     # Dependencies and scripts
```

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)

## License

MIT License - feel free to use this template for your own personal website! 