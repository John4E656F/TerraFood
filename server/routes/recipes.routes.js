const router = require('express').Router();

let Recipes = require('../models/recipes');

router.get('/', (req, res) => {
    Recipes.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/submit', (req, res) => {
     const newRecipes = new Recipes({ ...req.body })

     newRecipes.save()
     .then(result => res.status(200).json('Recipe added! ' + result))
     .catch(err => res.status(400).json('Error: ' + err))
})


//routes that end with /recipes/:recipe_id
router.route('/:recipe_id')
    //Get a single recipe at /recipes/:recipe_id
    .get((req, res) => {
        //findByID using the recipe_id 
        Recipes.findById(req.params.recipe_id, (err, recipe) => {
            //output error or recipe details from the db
            if(err) res.send(err);

            res.json(recipe);
        })
    })
    //UPDATE the recipe with this id at /recipes/:recipe_id
    .put((req, res) => {
        //find the recipe by id
        Recipes.findById(req.params.recipe_id, (err, recipe) => {
            //show error
            if(err) res.send(err);

            //update the recipes info if it is new(no blanks)
            if(req.body) recipe.body = {...req.body};
            // if(req.body.description) recipe.description = req.body.description;
            // if(req.body.image) recipe.image = req.body.image;
            // if(req.body.category) recipe.category = req.body.category;
            // if(req.body.bio) recipe.bio = req.body.bio;

            //return message
            recipe.save((err) => {
                if(err) res.send(err);

                res.json({message: 'Recipe has been updated!', data: recipe});
            });
        })
    })

    .delete((req, res) => {
        Recipes.remove({
            _id: req.params.recipe_id
        }, (err, user) => {
            if(err) res.send(err);

            res.json({ message: 'Successfully deleted recipe'});
        })
    })


module.exports = router;