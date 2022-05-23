const express = require("express");
const { getUsers, createUser, updateUser } = require("../controllers/user");
const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

module.exports = router;
