const Blog = require('../models/blog')


module.exports.getBlogs =async (req,res) => {
    const latestBlogs = await Blog.find().sort({ timestamp: -1 }).limit(10);

    // Respond with the latest blogs
    res.json(latestBlogs);
};

module.exports.getBlogById = async (req, res, next) => {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      // Respond with the specific blog
      res.json(blog);
    }
}

module.exports.writeBlog = async (req,res,next) => {
    const { filename } = req.file;
    const newBlog = new Blog({
        title: req.body.title,
        author: req.body.author,
        image: filename, // Save the filename to the 'image' field in the database
        type: req.body.type,
        body: req.body.body,
      });
    const savedBlog = await newBlog.save();

    // Respond with the saved blog object
    res.json(savedBlog);
}

module.exports.getWriteBlogForm = (req, res) => {
    // In this example, we are not rendering a specific form.
    // Instead, you can send a JSON response or render an HTML file.
    res.json({ message: 'This is the write blog form GET endpoint.' });
};
