const express = require('express');
const router = express.Router();

const Post  = require('../../models2/Post');


//Get all the posts

router.get('/' , (req, res, next)=> {
    Post.find()
        .then((posts) => {
            res.json(posts);
        })
        .catch(err => console.log(err))
});


//create a post

router.post('/add',(req,res,next) => {
    const book_ID = req.body.book_ID;
    const title = req.body.title;
    const author = req.body.author;
    newPost = new Post({
        book_ID : book_ID,
        title : title,
        author : author
    });
    newPost.save()
        .then(post =>{
            res.json(post);
        })
        .catch(err => console.log(err));
})


//Update a post


router.put('/update' , (req,res) => {
    if(!req.query.book_ID) {
        return res.status(400).send('Missing url parameter : book_ID')
    }
    Post.findOneAndUpdate({
        book_ID : req.query.book_ID
    },req.body,{
        new: true
    })
        .then(post => {
            res.json(post)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


//Delete a post


router.delete('/delete' , (req,res) => {
    if(!req.query.book_ID){
        return res.status(400).send('Missing URL parameter : book_ID')
    }
    Post.findOneAndRemove({
        book_ID : req.query.book_ID
    })
        .then(doc => {
            res.json(post)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router   
