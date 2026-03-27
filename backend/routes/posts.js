const router = require("express").Router();
const Post = require("../models/Post");
const authMiddleware = require("../middleware/authMiddleware");

// CREATE POST
router.post("/", authMiddleware, async (req, res) => {
  try {
    const newPost = new Post({
      userId: req.user.id,
      username: req.user.username,
      text: req.body.text,
      image: req.body.image
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);

  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

// LIKE POST
router.put("/:id/like", authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(req.user.username)) {
      post.likes.push(req.user.username);
    } else {
      post.likes = post.likes.filter(
        (u) => u !== req.user.username
      );
    }

    await post.save();
    res.json(post);

  } catch (err) {
    res.status(500).json(err);
  }
});

// COMMENT POST
router.put("/:id/comment", authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    post.comments.push({
      username: req.user.username,
      text: req.body.text
    });

    await post.save();
    res.json(post);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;