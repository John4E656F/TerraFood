require('dotenv').config();
const mongoose = require("mongoose");

const postDB = mongoose.createConnection(process.env.DATABASE_URL + `post`)
const Post = postDB.model(
  "Post",
  new mongoose.Schema({
    title:  { 
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    recipe: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe',
    },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    comments_id: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'Comment',
    },
    hidden: Boolean,
  }, { 
    collection: 'post',
    timestamps: true 
  }) //specify the mongodb collection
);
module.exports = Post;