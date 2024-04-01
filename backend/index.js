const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const ContactModel = require('./Models/contact')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test')

app.get('/get',(req,res)=>{
    ContactModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err));

});

app.delete('/delete/:id',(req,res)=>{
    const { id } = req.params;
    ContactModel.findByIdAndDelete(id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add',(req,res)=>{
    const {name,phone,email} = req.body;
    ContactModel.create({
        name:name,
        phone:phone,
        email:email
    }).then(result=>{
        res.json(result);
    }).catch(err=>{
        res.json(err);
    });
})
app.listen(3001,()=>{
    console.log("server is running")
})
