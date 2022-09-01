require('dotenv').config();
const mongoose = require("mongoose");

const recipesDB = mongoose.createConnection(process.env.DATABASE_URL + `recipes`)
const Recipes = recipesDB.model(
  "Recipes",
  new mongoose.Schema({
    name: { 
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    ingredient: [Object],
    image: {
        type: string,
        required: true,
    },
    info: [{
        preps: String,
        Cook: String,
        Total: String,
        Servings: String,
    }],
    hidden: Boolean,
  }, { collection: 'recipes' }) //specify the mongodb collection
);
module.exports = Recipes;