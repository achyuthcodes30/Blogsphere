const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blog.js')
const cors = require('cors');
const blog = require('./routes/blog.js')
const expressError = require('./utils/expressError')
const path = require('path');

const app=express()
async function main(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/blogsphere');
        console.log("Connected!")
    }catch(error){
        console.log(error)
        console.log("Oh no itsan error")
    }
}
main()

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use('/', blog);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Error middleware
app.all('*',(req,res,next) =>{
  next(new expressError('Page not found!',404))
})
app.use((err,req,res,next) => {
  const {statusCode=500,message} =err;
  if (!err.message) err.message = 'Oh No, Something Went Wrong!';
  res.status(statusCode).json({ error: message })
})
app.listen(3000,() => {
  console.log("Running!")
})


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