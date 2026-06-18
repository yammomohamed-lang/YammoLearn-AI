const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

let users = [];

// Home
app.get("/", (req, res) => {
  res.send("YammoLearn API Running 🚀");
});

// Save score
app.post("/save", (req, res) => {
  const { name, score } = req.body;

  users.push({ name, score });

  res.json({
    message: "Saved!",
    users
  });
});

// Get users
app.get("/users", (req, res) => {
  res.json(users);
});

// Register
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  users.push({
    username,
    password,
    score: 0
  });

  res.json({
    message: "User created"
  });
});

// Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    res.json({
      message: "Login success",
      user
    });
  } else {
    res.json({
      message: "Wrong credentials"
    });
  }
});

// AI endpoint
app.post("/ai", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: message
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer YOUR_API_KEY`
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});