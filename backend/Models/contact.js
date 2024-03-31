const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name:{type:String, required:true},
    phone:{type:Number, required:true},
    email:String
})

const ContactModel =mongoose.model("contact",ContactSchema)
module.exports = ContactModel