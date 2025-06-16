# JustEat Takeaway Demo Site

A modern, responsive web application built with React and Material-UI, designed to showcase a food delivery platform interface.

## Features

- Modern, clean design using Material-UI components
- Responsive layout that works on all devices
- Interactive elements with hover effects
- Custom theme with JustEat brand colors

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Build for production:
   ```bash
   npm run build
   ```

The application will be available at `http://localhost:3000` in development mode.

## Project Structure

- `src/` - Source files
  - `App.js` - Main application component
  - `index.js` - Application entry point
- `public/` - Static files
  - `index.html` - HTML template
- `package.json` - Project dependencies and scripts
- `_worker.js` - Cloudflare Worker for routing
- `wrangler.toml` - Cloudflare Pages configuration

## Technologies Used

- React
- Material-UI
- Emotion (for styled components)
- React Scripts (for build configuration)
- Cloudflare Pages (for deployment)

## Deployment

This application is configured for deployment on Cloudflare Pages. To deploy:

1. Make sure you have the Cloudflare Wrangler CLI installed:
   ```bash
   npm install -g wrangler
   ```

2. Login to your Cloudflare account:
   ```bash
   wrangler login
   ```

3. Deploy to Cloudflare Pages:
   ```bash
   wrangler pages deploy build
   ```

The application will be automatically built and deployed to Cloudflare Pages. The build output in the `build/` directory will be served through Cloudflare's global network.

### Cloudflare Pages Configuration

The project includes:
- `_worker.js` for handling client-side routing
- `wrangler.toml` for build and deployment configuration

These files ensure that:
- All routes are properly handled for the React application
- Static assets are served correctly
- The application is built and deployed according to Cloudflare Pages requirements
