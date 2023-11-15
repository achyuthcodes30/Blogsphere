const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blog.js')
const cors = require('cors');
const blog = require('./routes/blog.js')
const expressError = require('./utils/expressError')

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

/*
// Middleware for handling multipart form data (image upload to local storage)
app.post('/api/blogs', upload.single('image'), validateBlogMiddleware, async (req, res, next) => {
  // Access the local image details
  const { filename } = req.file;

  // Create a new blog object
  const newBlog = new Blog({
    title: req.body.title,
    author: req.body.author,
    image: filename, // Save the filename to the 'image' field in the database
    type: req.body.type,
    body: req.body.body,
  });

  try {
    // Save the blog to the database
    const savedBlog = await newBlog.save();

    // Respond with the saved blog object
    res.json(savedBlog);
  } catch (error) {
    // Handle database save error
    next(error);
  }
});

// API endpoint to get the latest blogs for the homepage
app.get('/api/blogs/latest', async (req, res, next) => {
  try {
    // Fetch the latest blogs from the database
    const latestBlogs = await Blog.find().sort({ timestamp: -1 }).limit(5);

    // Respond with the latest blogs
    res.json(latestBlogs);
  } catch (error) {
    // Handle database fetch error
    next(error);
  }
});

// API endpoint to get a specific blog by ID
app.get('/api/blogs/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    // Fetch the specific blog from the database by ID
    const blog = await Blog.findById(id);

    // Check if the blog exists
    
    }
if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    // Respond with the specific blog
    res.json(blog);
  } catch (error) {
    // Handle database fetch error
    next(error);
  }
}); */

// Error middleware
app.all('*',(req,res,next) =>{
  next(new expressError('Page not found!',404))
})
app.use((err,req,res,next) => {
  const {statusCode=500,message} =err;
  if (!err.message) err.message = 'Oh No, Something Went Wrong!';
  res.status(statusCode).render('error',{err})
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