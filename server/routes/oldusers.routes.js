const router = require('express').Router();
const bcrypt = require('bcrypt');

const handleLogin = require('../controllers/user');
let User = require('../models/user');

router.route('/:username').get((req, res) =>{
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login').post(handleLogin);

router.route('/signup').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = bcrypt.hashSync(req.body.password, 12);

    const newUser = new User({
        username,
        email,
        password,
    });

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.put('/update/:username', async (req, res) => {
    const { username } = req.params;
    // const { email, password } = req.body;
    const filter = { username: username }
    const update = { 
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 12)
    }

    const updatedUser = await User.findOneAndUpdate( filter, update, { 
        new: true,
        runValidators: true
    })
        try{
            res.status(200).json({
                message: 'User Updated',
                data: updatedUser
            })
        }catch(err) {
            res.status(400).send(err)
        };
        
});


module.exports = router;