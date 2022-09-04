const router = require('express').Router();
const bcrypt = require('bcrypt');


const handleLogin = require('../controllers/user');
let User = require('../models/user');

router.route('/').get((req, res) =>{
        User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post(handleLogin);

router.route('/signup').post((req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 12);
    const profilePicture = req.body.pfp;
    const bio = req.body.bio

    const newUser = new User({
        name,
        username,
        email,
        password,
        profilePicture,
        bio,
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//routes that end with /users/:user_id
router.route('/:user_id')
    //Get a single user at /users/:user_id
    .get((req, res) => {
        //findByID using the user_id 
        User.findById(req.params.user_id, (err, user) => {
            //output error or user details from the db
            if(err) res.send(err);

            res.json(user);
        })
    })
    //UPDATE the user with this id at /users/:user_id
    .put((req, res) => {
        //find the user by id
        User.findById(req.params.user_id, (err, user) => {
            //show error
            if(err) res.send(err);

            //update the users info if it is new(no blanks)
            if(req.body.name) user.name = req.body.name;
            if(req.body.username) user.username = req.body.username;
            if(req.body.password) user.password = bcrypt.hashSync(req.body.password, 12);
            if(req.body.pfp) user.profilePicture = req.body.pfp;
            if(req.body.bio) user.bio = req.body.bio;

            //return message
            user.save((err) => {
                if(err) res.send(err);

                res.json({message: 'User has been updated!', data: user});
            });
        })
    })

    .delete((req, res) => {
        User.remove({
            _id: req.params.user_id
        }, (err, user) => {
            if(err) res.send(err);

            res.json({ message: 'Succesfully deleted user'});
        })
    })

router.route('/:username')
    .get((req, res) => {
        const username = req.params.username;
        res.json(username);
        User.find({ 'username': new RegExp(username, 'i')}, (err, user) => {
            if(err) {res.send(err);}

            res.json(user);
        })
    })

module.exports = router;
