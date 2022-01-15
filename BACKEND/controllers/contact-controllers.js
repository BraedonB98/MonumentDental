

const HttpError = require('../models/http-error');
const Contact = require('../models/contact');
const {validationResult} = require('express-validator');

const contact = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return(next(new HttpError('Invalid Inputs Passed found by expressValidator Please try again', 422)))
    }
    const{name, email, phoneNumber,message }= req.body;
    const createdContact = new Contact({
        name,
        email,
        phoneNumber,
        message
    })
    try{
        await createdContact.save();
    }
    catch(error){
        return(next(new HttpError('Creating contact failed', 500)))
    }




    console.log("post contact")
    res.status(201).json({contact:createdContact.toObject({getters:true})})
}

exports.contact = contact;