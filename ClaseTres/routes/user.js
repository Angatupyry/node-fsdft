const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  login,
} = require("../controllers/user");
const { verifyToken } = require("../middlewares/validate");
const router = express.Router();

router.get("/", verifyToken, getUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

router.post("/login", login);

module.exports = router;
