const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health route (useful for Render testing)
app.get("/", (req, res) => {
res.send("Login API is running 🚀");
});

// Login route
app.post("/login", (req, res) => {
const { username, password } = req.body;

if (username === "admin" && password === "admin") {
res.status(200).json({
message: "Login successful",
username: username,
});
} else {
res.status(401).json({
message: "Invalid credentials",
});
}
});

// Port configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
