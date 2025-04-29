const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.post("/validate", (req, res) => {
  const { email } = req.body;
  const isValid = /\S+@\S+\.\S+/.test(email);
  res.json({ valid: isValid });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
