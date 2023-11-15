const express= require('express')
const router = express.Router();
const {upload} = require('../multer/multer.js')
const ExpressError = require('../utils/expressError');
const catcher = require('../utils/catcher');
const blog = require('../controllers/blog')
const {validateBlog} = require('../middleware.js')

router.route('/blogs')
    .get(catcher(blog.getBlogs))
    .post(upload.single('image'),validateBlog,catcher(blog.writeBlog))

router.route('/writeblog')
    .get(catcher(blog.getWriteBlogForm))

router.route('/blogs/:id')
    .get(catcher(blog.getBlogById))


module.exports=router;