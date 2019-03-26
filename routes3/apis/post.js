const express = require('express');
const router = express.Router();

const Post  = require('../../models3/Post');


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
    const patient_ID = req.body.patient_ID;
    const name = req.body.name;
    const age = req.body.age;
    const deptt = req.body.deptt;
    newPost = new Post({
        patient_ID : patient_ID,
        name : name,
	age : age,
        deptt : deptt
    });
    newPost.save()
        .then(post =>{
            res.json(post);
        })
        .catch(err => console.log(err));
})



//Update a post

router.put('/update' , (req,res) => {
    if(!req.query.patient_ID) {
        return res.status(400).send('Missing url parameter : patient_ID')
    }
    Post.findOneAndUpdate({
        patient_ID : req.query.patient_ID
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
    if(!req.query.patient_ID){
        return res.status(400).send('Missing URL parameter : patient_ID')
    }
    Post.findOneAndRemove({
        patient_ID : req.query.patient_ID
    })
        .then(doc => {
            res.json(post)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

module.exports = router   
