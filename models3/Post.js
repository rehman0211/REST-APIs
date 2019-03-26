const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    patient_ID: {
        type : String,
        required : true
    },
    name: {
        type : String,
        required : true
    },
    age: {
        type : Number,
        required : true
    },
    deptt: {
        type : String,
        required : true
    },
    lastEntry:	{
	type : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Post' , PostSchema);
const Post = module.exports

//3
