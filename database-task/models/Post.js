// Import mongoose
const mongoose = require("mongoose");

// Create Schema
const schema = mongoose.Schema({

    title: String,
    content: String

});

// Create model
const Post = mongoose.model("Post", schema);

// Export model
module.exports = Post;