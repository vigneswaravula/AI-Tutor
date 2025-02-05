const express = require('express');
const connectDB = require('./db');
const apiRoutes = require('./routes/api');
const app = express();
const PORT = process.env.PORT || 5001; // Changed to 5001

// Middleware
app.use(express.json());

// MongoDB connection
connectDB();

// Use routes
app.use('/', apiRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
