require('dotenv').config();
const mongoose = require("mongoose");

const recipesDB = mongoose.createConnection(process.env.DATABASE_URL + `recipes`)
const Recipes = recipesDB.model(
  "Recipes",
  new mongoose.Schema({
    title:  { 
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
        type: Array,
        required: true,
    },
    video: {
      type: Array,
    },
    recipe: {
        type: mongoose.SchemaTypeOptions.Types.ObjectId,
        ref: 'Recipe',
    },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    comments: [{
      type: Schema.Types.ObjectId, 
      ref: 'Comment' ,
    }],
    hidden: Boolean,
  }, { collection: 'recipes' }) //specify the mongodb collection
);
module.exports = Recipes;