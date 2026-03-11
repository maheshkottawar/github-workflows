const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);

  res.on('finish', () => {
    console.log(`[${timestamp}] ${req.method} ${req.path} - Status: ${res.statusCode}`);
  });

  next();
});

// In-memory data store (for demo purposes)
let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Endpoint 1: Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Endpoint 2: Get all users (v3)
app.get('/api/v3/users', (req, res) => {
  res.json({
    success: true,
    data: users,
    count: users.length
  });
});

// Endpoint 3: Create a new user (v3)
app.post('/api/v3/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    console.warn(`[${new Date().toISOString()}] Validation failed - Missing required fields: name=${name}, email=${email}`);
    return res.status(400).json({
      success: false,
      message: 'Name and email are required'
    });
  }

  const newUser = {
    id: Math.max(...users.map(u => u.id), 0) + 1,
    name,
    email
  };

  users.push(newUser);
  console.log(`[${new Date().toISOString()}] User created successfully - ID: ${newUser.id}, Name: ${newUser.name}`);

  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser
  });
});

// Endpoint 4: Get user by ID (v3)
app.get('/api/v3/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));

  if (!user) {
    console.warn(`[${new Date().toISOString()}] User not found - ID: ${req.params.id}`);
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  console.log(`[${new Date().toISOString()}] User retrieved - ID: ${user.id}, Name: ${user.name}`);
  res.json({
    success: true,
    data: user
  });
});

// Endpoint 5: Delete user by ID (v3)
app.delete('/api/v3/users/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

  if (userIndex === -1) {
    console.warn(`[${new Date().toISOString()}] Delete failed - User not found - ID: ${req.params.id}`);
    return res.status(404).json({
      success: false,
      message: 'User not found'
    });
  }

  const deletedUser = users.splice(userIndex, 1);
  console.log(`[${new Date().toISOString()}] User deleted successfully - ID: ${deletedUser[0].id}, Name: ${deletedUser[0].name}`);

  res.json({
    success: true,
    message: 'User deleted successfully',
    data: deletedUser[0]
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(`[${new Date().toISOString()}] Error: ${err.message}`);
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`Get users: http://localhost:${PORT}/api/v3/users`);
});
