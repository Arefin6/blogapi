const express = require("express");
const { createPost, getPostById } = require("../controllers/postController");
const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPostById);

module.exports = router;
