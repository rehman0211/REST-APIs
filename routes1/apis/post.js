const express = require('express');
const router = express.Router();

const Post  = require('../../models1/Post');


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
    const college_ID = req.body.college_ID;
    const name = req.body.name;
    const course = req.body.course;
    newPost = new Post({
        college_ID : college_ID,
        name : name,
        course : course
    });
    newPost.save()
        .then(post =>{
            res.json(post);
        })
        .catch(err => console.log(err));
})



//Update a post


router.put('/update' , (req,res) => {
    if(!req.query.college_ID) {
        return res.status(400).send('Missing url parameter : college_id')
    }
    Post.findOneAndUpdate({
        college_ID : req.query.college_ID
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
    if(!req.query.college_ID){
        return res.status(400).send('Missing URL parameter : college_ID')
    }
    Post.findOneAndRemove({
        college_ID : req.query.college_ID
    })
        .then(doc => {
            res.json(post)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router   
