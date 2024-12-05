const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let users = []; // Temporary in-memory storage for users (no database)

// Secret key for JWT
const JWT_SECRET = 'your_jwt_secret';

// Register route
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Find the user in the database (simulated here with a mock user)
  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Use bcrypt to check the password (simulated here for demo)
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  // Generate a JWT token
  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

  // Send the token in the response
  res.json({ token });
});


app.get('/api/mainpage', (req, res) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  // Verify token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }

    res.json({ message: 'Welcome to the main page!' });
  });
});


// Protected route (MainPage)
app.get('/api/mainpage', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Invalid token' });
    res.json({ message: 'Welcome to the MainPage' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
