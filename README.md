# Portfolio

A simple React + Node portfolio website with a Vercel-ready API route.

## Features
- Responsive portfolio layout
- About and Degree sections
- Contact links including GitHub and Facebook
- Vercel-friendly API endpoint for portfolio data

## Project Structure
- `client/` - React frontend
- `client/api/` - Vercel serverless API
- `server/` - Local Express backend (optional for development)

## Development

### Frontend
```bash
cd client
npm install
npm start
```

### Local API
```bash
cd server
npm install
npm run dev
```

### Build for production
```bash
cd client
npm run build
```

## Deployment
This project is set up for Vercel deployment using the React app in `client/` and the API route in `client/api/portfolio.js`.
