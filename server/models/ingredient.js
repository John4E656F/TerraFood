const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
    name: {
        type: String,
    }, 
    nutriment: {
        type: Object,
    },

})

