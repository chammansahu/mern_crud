const express = require('express');
const mongoose = require('mongoose')
const router = express.Router()

const schema = mongoose.Schema

const postSchema = new schema({
   
    title:String,
    url: String,
    description:String,
})
//testing route

router.get('/test',(req,res)=>{
    res.end('helloworld using router')
})

const postModel = mongoose.model('posts', postSchema)

router.post('/addpost', (req, res) => {
    const newPost = new postModel({
        title:req.body.title,
        url:req.body.url,
        description:req.body.description
    })
    newPost.save((err)=>!err?res.send('new post added'):res.send(err))
})
 
router.get('/getposts', (req, res) => {
    postModel.find({}, (docs, err) => {
        if (!err) {
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})


module.exports=router