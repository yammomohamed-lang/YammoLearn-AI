const axios = require("axios");

exports.askAI = async (req, res) => {
  const { question } = req.body;

  const response = await axios.post("https://api.openai.com/v1/chat/completions", {
    model: "gpt-4",
    messages: [{ role: "user", content: question }]
  }, {
    headers: {
      Authorization: `Bearer YOUR_API_KEY`
    }
  });

  res.json(response.data);
};