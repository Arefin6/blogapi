const postModel = require("../models/postModel");
const posts = require("../storage/posts");
const postSchema = require("../utils/validatePost");

const createPost = (req, res) => {
  const { title, content, author } = req.body;
  const { error } = postSchema.validate({ title, content, author });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  const post = new postModel(title, author, content);
  posts.push(post);
  res.status(201).json({
    message: "Post created successfully",
    post,
  });
};

const getPostById = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }
  res.status(200).json(post);
};

module.exports = {
  createPost,
  getPostById,
};
