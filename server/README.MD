# Terra Food REST API


## Techs
- ExpressJS : Routing
- MongoDB : Database
- Mongoose : Mongodb Object Modeling
- AWS : Backend Host
- Firebase : Storage

# How to use?
Install [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) recommended

Both of this tools are API platform for developers to design, build, test and iterate their APIs

API URL : [http://3.86.50.101:3000/recipe](http://3.86.50.101:3000/recipe)

Recipe Routes:
- '/' : GET request to find all the list of recipes
- '/:recipe_id' : GET request find recipe base by the :recipe_id
                  PUT request update recipe base the the :recipe_id
                  DELETE request delete recipe base the the :recipe_id
- '/submit' : POST request submit recipe to the DB

POST request example:

``
{
	"name": "write recipe name",
	"description": "write recipe description",
	"image": [
		"img url 1", 
		"img url 2"],
	"video": "video url",
	"category": {
		"breakfast": false,
		"lunch": true,
		"dinner": true,
		"salad": false,
		"maindish": false,
		"sideDish": true,
		"snack": true,
		"soup": false,
		"vegetarian": true,
		"vegan": true,
		"mediterranean": false,
		"keto": false,
		"carnivore": false,
		"paleo": false,
		"pescetarian": false,
		"lowFat": false,
		"nordic": false,
		"asian": false
	},
	"ingredients": [
		"2 ½ pounds russet potatoes, peeled",
		"1 cup vegetable oil for frying",
		"1 cup all-purpose flour",
		"1 teaspoon garlic salt",
		"1 teaspoon onion salt",
		"1 teaspoon paprika",
		"1 teaspoon salt",
		"½ cup water, or as needed"
	],
	"instruction": [
		"Slice potatoes into French fries and place them into a large bowl of cold water to prevent them from turning brown.",
		"Heat oil in a heavy saucepan or large skillet to 350 degrees F (175 degrees C).",
		"While the oil is heating, sift flour, garlic salt, onion salt, paprika, and salt into a large bowl. Gradually stir in enough water to make a slightly thick batter that can be drizzled from a spoon.",
		"Drain fries and pat dry; dip into the batter one at a time and place in hot oil to prevent them from clumping together. Fry until golden brown and crispy on all sides, about 7 to 10 minutes; drain on a paper towel-lined plate."
	],
	"user_id": "6315001159bb1c601dfb286d",
	"hidden": false
}
``