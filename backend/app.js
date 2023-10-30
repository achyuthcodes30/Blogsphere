const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const app=express()
async function main(){
    try{
        await mongoose.connect('mongodb+srv://admin:12345@cluster0.p4vtm2q.mongodb.net/?retryWrites=true&w=majority');
        console.log("Connected!")
    }catch(error){
        console.log(error)
        console.log("Oh no itsan error")
    }
}
main()

/* const seedblog = async () => {
        const blog = new Blog({
            title: "Pes sucks",
            author: "Aditiyaa Naag",
            body: "Bro wtf is this college da some louda bs."
        })
        await blog.save();
}
seedblog().then(() =>{
mongoose.connection.close()
}); */