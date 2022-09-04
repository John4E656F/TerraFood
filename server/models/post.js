require('dotenv').config();
const mongoose = require("mongoose");

const postDB = mongoose.createConnection(process.env.DATABASE_URL + `rpost`)
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
        type: mongoose.SchemaTypeOptions.Types.ObjectId,
        ref: 'Recipe',
    },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    comments_id: [{
      type: Schema.Types.ObjectId, 
      ref: 'Comment' ,
    }],
    hidden: Boolean,
  }, { collection: 'post' }) //specify the mongodb collection
);
module.exports = Post;