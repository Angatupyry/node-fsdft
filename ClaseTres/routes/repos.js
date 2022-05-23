const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const response = await axios(`https://api.github.com/users/${userId}`);

    const repos = await axios(response.data.repos_url);
    req.body;

    const reposName = [];

    repos.data.forEach((ronaldinho) => {
      reposName.push(ronaldinho.name);
    });

    res.send(reposName);
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
