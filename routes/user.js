const express = require('express');
const mongoose = require('mongoose')
const user_router = express.Router()

const schema = mongoose.Schema

const userSchema = new schema({
   
    userName:String,
    email: String,
    password:String,
    password2:String
})



const postModel = mongoose.model('users',userSchema)

user_router.post('/adduser', (req, res) => {
    const newUser = new postModel({
        userName:req.body.userName,
        email:req.body.email,
        password:req.body.password_1,
        password2:req.body.password_2,
    })
    newUser.save((err)=>!err?res.send('new post added'):res.send(err))
})

module.exports=user_router