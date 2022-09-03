require('dotenv').config();
const mongoose = require("mongoose");

const recipesDB = mongoose.createConnection(process.env.DATABASE_URL + `recipes`)
const Recipes = recipesDB.model(
  "Recipes",
  new mongoose.Schema({
    username:  { 
      type: String,
      required: true,
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
        type: Array,
        required: true,
    },
    bio: String,
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
      default: 'Basic'
    },
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    hidden: Boolean,
  }, { collection: 'recipes' }) //specify the mongodb collection
);
module.exports = Recipes;