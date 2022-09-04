require('dotenv').config();
const mongoose = require("mongoose");

const recipesDB = mongoose.createConnection(process.env.DATABASE_URL + `recipes`)
const Recipes = recipesDB.model(
  "Recipes",
  new mongoose.Schema({
    name:  { 
      type: String,
      required: true,
      trim: true,
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
    category: {
      breakfast: { type: Boolean, default: 'false', },
      lunch: { type: Boolean, default: 'false', },
      dinner: { type: Boolean, default: 'false', },
      salad: { type: Boolean, default: 'false', },
      sideDish: { type: Boolean, default: 'false', },
      snack: { type: Boolean, default: 'false', },
      soup: { type: Boolean, default: 'false', },
      vegetarian: { type: Boolean, default: 'false', },
      vegan: { type: Boolean, default: 'false', },
      mediterranean: { type: Boolean, default: 'false', },
      keto: { type: Boolean, default: 'false', },
      carnivore: { type: Boolean, default: 'false', },
      paleo: { type: Boolean, default: 'false', },
      pescetarian: { type: Boolean, default: 'false', },
      lowFat: { type: Boolean, default: 'false', },
      nordic: { type: Boolean, default: 'false', },
      asian: { type: Boolean, default: 'false', },
    },
    user_id: { type: Schema.Types.ObjectId, ref: 'User' },
    hidden: Boolean,
  }, { collection: 'recipes' }) //specify the mongodb collection
);
module.exports = Recipes;