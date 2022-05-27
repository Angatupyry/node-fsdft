const express = require("express");
const { get, create } = require("../controllers/tareas");
const router = express.Router();
const { verifyToken } = require("../middlewares/verify");

router.get("/", verifyToken, get);

router.post("/", create);

module.exports = router;
