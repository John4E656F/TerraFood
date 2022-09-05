require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const userRoute = require('./routes/users.routes');
const recipeRoute = require('./routes/recipes.routes');
const postRoute = require('./routes/post.routes');

app.use('/user', userRoute)
app.use('/recipe', recipeRoute)
app.use('/post', postRoute)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
