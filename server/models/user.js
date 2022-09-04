require('dotenv').config();
const mongoose = require("mongoose");

const usersDB = mongoose.createConnection(process.env.DATABASE_URL + `users`)
const User = usersDB.model(
  "User",
  new mongoose.Schema({
    name:  { 
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      trim: true,
      unique: true,
    },
    username:  { 
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    profilePicture: {
        type: String,
        required: true,
    },
    bio: {
      type: String,
      maxLength: 300,
    },
    // index: { unique: true },
    // role: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'Role',
    //   default: 'Basic'
    // },
    hidden: Boolean,
  }, { 
      collection: 'users',
      timestamps: true 
    }) //specify the mongodb collection
);
module.exports = User;