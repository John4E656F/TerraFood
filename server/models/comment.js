require('dotenv').config();
const mongoose = require("mongoose");

const commentDB = mongoose.createConnection(process.env.DATABASE_URL + `comment`)
const Comment = commentDB.model(
  "Comment",
  new mongoose.Schema({
    user_id:  { 
        type: Schema.Types.ObjectId, 
        ref: 'User',
      required: true,
      trim: true,
      unique: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    post: {
        type: mongoose.SchemaTypeOptions.Types.objectId,
        ref: 'Post'
    },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    hidden: Boolean,
  }, { collection: 'comment' }) //specify the mongodb collection
);
module.exports = Comment;