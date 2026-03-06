const express = require("express");
const mongoose = require("mongoose");
const Post = require("./models/Post");

const app = express();

// Middleware
app.use(express.json());

// CONNECT DATABASE
mongoose
  .connect("mongodb://127.0.0.1:27017/postsDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// GET POSTS
app.get("/getPosts", async (req, res) => {
  const posts = await Post.find();

  res.json(posts);
});

// ADD POST
app.post("/addPosts", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });

  const savedPost = await post.save();

  res.json(savedPost);
});

// DELETE POST
app.delete("/delPosts/:id", async (req, res) => {
  const deletedPost = await Post.findByIdAndDelete(req.params.id);

  res.json(deletedPost);
});

// UPDATE POST
app.patch("/post/:id", async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(
    req.params.id,

    {
      title: req.body.title,
      content: req.body.content,
    },

    { new: true },
  );

  res.json(updatedPost);
});

// SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});
