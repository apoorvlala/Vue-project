const Post = require('../models/post.model');
exports.getPost= async(req , res)=>{
    try{
        Post.find({},(err , doc)=>{
            if(err){
                res.json({status:400 , message:'Data not found'});
            }
            res.json({data:doc , status:200 , message:'success'})
        });
    }catch(error){
        console.log(error);
    }    
}

exports.create = async(req , res)=>{
    const data = new Post({
        name : req.body.name,
        title:req.body.title,
        detail:req.body.detail,
        image:req.body.image
    })
    const savePost = await data.save();
    if(savePost){
        res.json({status:200 , data:savePost , message:'Post created.'});
    }else{
        return res.json({status:400 , message :'error'})
    }
}