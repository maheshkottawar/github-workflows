# Node.js API Application

A simple Node.js REST API with Express.js that exposes multiple endpoints.

## Features

- **Health Check Endpoint** - Monitor application status
- **User Management** - Get users, create new users, get user by ID
- **Error Handling** - Proper HTTP status codes and error messages
- **Docker Support** - Includes Dockerfile for containerization

## Endpoints

1. **GET /health** - Health check endpoint
   ```bash
   curl http://localhost:3000/health
   ```

2. **GET /api/users** - Get all users
   ```bash
   curl http://localhost:3000/api/users
   ```

3. **POST /api/users** - Create a new user
   ```bash
   curl -X POST http://localhost:3000/api/users \
     -H "Content-Type: application/json" \
     -d '{"name": "John", "email": "john@example.com"}'
   ```

4. **GET /api/users/:id** - Get user by ID
   ```bash
   curl http://localhost:3000/api/users/1
   ```

## Installation & Running Locally

### Prerequisites
- Node.js (v18 or higher)
- npm

### Setup
```bash
# Install dependencies
npm install

# Start the server
npm start

# Or use development mode with auto-reload
npm run dev
```

The server will run on `http://localhost:3000` by default.

## Docker Setup

### Build the Docker Image
```bash
docker build -t simple-nodejs-api .
```

### Run the Docker Container
```bash
docker run -p 3000:3000 simple-nodejs-api
```

### Run with custom port
```bash
docker run -p 8080:3000 -e PORT=3000 simple-nodejs-api
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (default: production in Docker)

## Files

- `server.js` - Main application file with all endpoints
- `package.json` - Project dependencies and scripts
- `Dockerfile` - Docker configuration for containerization
- `README.md` - This file

## License

ISC
