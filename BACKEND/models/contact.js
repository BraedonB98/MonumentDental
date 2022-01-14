const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const contactSchema = new Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true}, //unique makes searching for an email significantly faster but also has to be unique
    phoneNumber:{type:String, required:true , match: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/},
    message:{type:String, required:true ,minLength: 5},
});

;

module.exports = mongoose.model('Contact',contactSchema);