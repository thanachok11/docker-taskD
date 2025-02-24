const express = require("express");
const cors = require("cors");
const app = express();

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Backend server is running" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
