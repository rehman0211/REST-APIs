const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    college_ID: {
        type : String,
        required : true
    },
    name: {
        type : String,
        required : true
    },
    course: {
        type : String,
        required : true
    },
    LastEdited: {
        type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Post' , PostSchema);
const Post = module.exports

//1
