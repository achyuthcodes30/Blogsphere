const Blog = require('../models/blog')
const Fuse = require('fuse.js')

module.exports.getBlogs =async (req,res) => {
    const latestBlogs = await Blog.find().sort({ timestamp: -1 }).limit(10);

    // Respond with the latest blogs
    res.json(latestBlogs);
};

/*module.exports.getBlogByTitle = async (req, res, next) => {
    const { title } = req.params;
    const blog = await Blog.find({title: title});
    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
} */

module.exports.getBlogById = async (req, res, next) => {
    const { id } = req.params;
   /*  if(id === 'search'){
        return await blog.searchBlog(req, res, next);
    } */
    const blog = await Blog.findById(id);
    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
    }
    res.json(blog);
}

module.exports.writeBlog = async (req,res,next) => {
    const { filename } = req.file;
    const newBlog = new Blog({
        title: req.body.title,
        author: req.body.author,
        image: filename, 
        type: req.body.type,
        body: req.body.body,
      });
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
}

module.exports.getWriteBlogForm = (req, res) => {
    res.json({ message: 'This is the write blog form GET endpoint.' });
};

module.exports.getBlogByCategory = async (req,res,next) => {
    const { type } = req.params;
    const categoryBlogs = await Blog.find({type: type}).sort({ timestamp: -1 })
    if (categoryBlogs.length === 0) {
        return res.status(404).json({ error: 'Category not found' });
    }
    res.json(categoryBlogs);
}

module.exports.searchBlog = async (req,res,next) => {
    const {query} = req.query;
    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }
    const fuse = new Fuse(await Blog.find().lean(), {
        keys: ['title', 'author', 'body','type'],
        includeScore: true,
        threshold: 0.3
        
    });

    const searchResults = fuse.search(query);

    res.json(searchResults);
}
