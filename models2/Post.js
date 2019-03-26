const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    book_ID: {
        type : String,
        required : true
    },
    title: {
        type : String,
        required : true
    },
    author: {
        type : String,
        required : true
    }

});

module.exports = mongoose.model('Post' , PostSchema);
const Post = module.exports

//2
