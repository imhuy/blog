const router = require('express').Router();
const Post = require('../models/post')

router.post('/post', (req, res) => {

    console.log(req.body)

    var post = new Post({
        title: req.body.title,
        content: req.body.content,
        tag: req.body.tag,
        category: req.body.category,
        image: req.body.image,
        description: req.body.description,
    });
    post.save().then((post) => {
        res.send(post);
    }, (e) => {
        res.status(400).send(e);
    });
});



router.delete('/post/delete/:title', (req, res) => {
    var query = { userID: req.params.title };
    Post.findOneAndRemove(query,
        (e, raw) => {
            if (e) {
                res.status(400).send('Invalid username supplied');
            }
            res.send(raw);
        });
});

router.get('/postby/:title', (req, res) => {
    var title = req.params.title;

    Post.find({ title: title }).then((post) => {
        res.send(post);
    }, (e) => {
        res.status(400).send(e);
    });
});


router.get('/post/:page/:pagesize', async (req, res) => {
    let page = parseInt(req.params.page)
    let pagesize = parseInt(req.params.pagesize)

    let dev = await Post.find({})
        .select(['title', 'category', 'image', 'description'])
        .skip(page * pagesize)
        .limit(pagesize)
    res.send(dev)

});

router.get('/getbyid/:id', async (req, res) => {
    var id = req.params.id;
    let dev = await Post.find({ _id: id })

    res.send(dev)

});


module.exports = router;