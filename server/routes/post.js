const router = require('express').Router();
const Post = require('../models/post')

router.post('/post', (req, res) => {
    var post = new Post({
        title: req.body.title,
        content: req.body.content,
        tag: req.body.tag,
        category: req.body.category
    });
    post.save().then((post) => {
        res.send(post);
    }, (e) => {
        res.status(400).send(e);
    });
});

router.get('/post/:title', (req, res) => {
    var title = req.params.title;

    Post.find({ title: title }).then((post) => {
        res.send(post);
    }, (e) => {
        res.status(400).send(e);
    });
});


module.exports = router;