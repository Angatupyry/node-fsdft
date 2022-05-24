const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  login,
} = require("../controllers/user");
const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

router.post("/login", login);

module.exports = router;
