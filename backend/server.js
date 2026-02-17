const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.post("/submit", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello ${name}, backend working!` });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
