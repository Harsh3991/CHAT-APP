# CHAT-APP

I'm building a chat app using the MERN stack, where MongoDB handles the data, Express takes care of the backend, React powers the frontend, and Node.js makes everything run smoothly with real-time communication.

## Project Structure

```
CHAT-APP/
├── package.json (root)
├── railway.json (Railway config)
├── backend/
│   ├── src/
│   └── package.json
└── frontend/
    ├── dist/ (built files)
    └── package.json
```

## Deployment

This project is configured for Railway deployment with both frontend and backend in a single repository. The backend serves the built frontend files in production.

## Scripts

- `npm run build` - Build frontend for production
- `npm start` - Start the backend server
- `npm run install:all` - Install dependencies for all packages
