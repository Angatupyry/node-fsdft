const express = require("express");
const router = require("./routes/default");
const app = express();

const PORT = 3500;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/users", async (req, res) => {
  const { password, username } = req.body;
  if (!password || !username) {
    return res.status(401).json({ data: [], success: false });
  }

  return res.status(201).json({ data: [], success: true });
});

// app.use("/", router);

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));

module.exports = app;
