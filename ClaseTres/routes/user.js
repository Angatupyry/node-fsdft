const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  login,
} = require("../controllers/user");
const router = express.Router();
const { verifyToken } = require("../middlewares/verify");

router.get("/", verifyToken, getUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

router.post("/login", login);

module.exports = router;
