require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let meals = []; // In-memory storage

app.get('/meals', (req, res) => {
  res.json(meals);
});

app.post('/meals', (req, res) => {
  const newMeal = {
    ...req.body,
    id: Date.now(),
    createdAt: new Date().toISOString(),
  };
  meals.push(newMeal);

  // Emit over WebSocket
  io.emit('new-meal', newMeal);

  res.status(201).json(newMeal);
});

io.on('connection', (socket) => {
  console.log('🔌 Client connected via WebSocket');
  socket.on('disconnect', () => {
    console.log('🔌 Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
