

const HttpError = require('../models/http-error');
const Contact = require('../models/contact');
const {validationResult} = require('express-validator');

const contact = async (req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())
    {
        return(next(new HttpError('Invalid Inputs Passed found by expressValidator Please try again', 422)))
    }
    console.log("post contact")
    res.json({message: 'message sent' })
}

exports.contact = contact;