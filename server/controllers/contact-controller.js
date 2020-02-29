const Contact = require('../models/contact.model');
exports.postContact = async(req , res)=>{
    try{
        const contact = Contact({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            message : req.body.message
        })
        const saveContact = await contact.save();
        if(saveContact){
            res.json({status : 200 , message:'success' , data:saveContact})
        }
    }catch(error){
        console.log(error)
    }
}