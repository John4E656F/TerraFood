const router = require('express').Router();

let Post = require('../models/post');

router.get('/', (req, res) => {
    Post.find()
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/submit', (req, res) => {
     const newPost = new Post({ ...req.body })

     newPost.save()
     .then(result => res.status(200).json('post added! ' + result))
     .catch(err => res.status(400).json('Error: ' + err))
})


//routes that end with /post/:post_id
router.route('/:post_id')
    //Get a single post at /post/:post_id
    .get((req, res) => {
        //findByID using the post_id 
        Post.findById(req.params.post_id, (err, post) => {
            //output error or post details from the db
            if(err) res.send(err);

            res.json(post);
        })
    })
    //UPDATE the post with this id at /post/:post_id
    .put((req, res) => {
        //find the post by id
        Post.findById(req.params.post_id, (err, post) => {
            //show error
            if(err) res.send(err);

            //update the post info if it is new(no blanks)
            if(req.body) post.body = {...req.body};
            // if(req.body.description) post.description = req.body.description;
            // if(req.body.image) post.image = req.body.image;
            // if(req.body.category) post.category = req.body.category;
            // if(req.body.bio) post.bio = req.body.bio;

            //return message
            post.save((err) => {
                if(err) res.send(err);

                res.json({message: 'Post has been updated!', data: post});
            });
        })
    })

    .delete((req, res) => {
        Post.remove({
            _id: req.params.post_id
        }, (err, user) => {
            if(err) res.send(err);

            res.json({ message: 'Successfully deleted post'});
        })
    })


module.exports = router;