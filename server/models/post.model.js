const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    detail :{
        type :String,
        required : true
    },
    image : {
        type : String,        
    },
    date :{
        type : Date,
        default : Date.now()
    }
});
module.exports = mongoose.model('Post' , postSchema);