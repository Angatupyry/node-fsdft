const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello world!");
});

router.get("/hello", (req, res) => {
  const name = req.params.name + "world";
  res.send(`hello ${name}!`);
});

module.exports = router;
