const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware to log IP and Port
app.use((req, res, next) => {
  const ip = req.ip; // Get the IP address of the client
  const port = req.connection.localPort; // Get the port of the server (request's local port)

  console.log(
    `Request received from IP: ${ip}, Port: ${port}, Path: ${req.originalUrl}`
  );
  next(); // Pass control to the next middleware
});

// Middleware for parsing JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/", async (req, res) => {
  res.status(200).json("hello suyash");
});

app.get("/app1", async (req, res) => {
  res.status(200).json("Hello I am App1");
});

app.get("/app2", async (req, res) => {
  res.status(200).json("Hello I am App2");
});

app.get("/app3", async (req, res) => {
  res.status(200).json("Hello I am App3");
});
app.get("/suyash", async (req, res) => {
  res.status(200).json("Docker Update testing1");
});

// User routes
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
