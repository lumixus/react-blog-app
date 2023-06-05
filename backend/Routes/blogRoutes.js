import express from "express"
import Blog from "../Models/blogSchema.js";
import Category from "../Models/categorySchema.js";
import User from "../Models/userSchema.js";
import { isAuth } from "../utils.js";




const blogRoutes = express.Router();

blogRoutes.put("/update",isAuth,async(req,res) => {
    const blog = await Blog.findOne({_id : req.body.post._id});
    blog.title = req.body.post.title;
    blog.body = req.body.post.body;
    blog.category = req.body.post.category;
    blog.save();

    if(blog.title === req.body.post.title && blog.body === req.body.post.body && blog.category === req.body.post.category){
        res.send({success : true});
    }else{
        res.send({success : false});
    }

})

blogRoutes.post("/new",async(req,res) => {   
    const blog = new Blog(req.body);
    
    blog.save(); 

    if(blog){
        res.send({success : true});
    }else{
        res.send({success : false});
    } 
    
    });



blogRoutes.get("/",async (req,res) => {
    const posts = await Blog.find({});
     for (let index = 0; index < posts.length; index++) {
        posts[index].category = await Category.findById(posts[index].category);   
     }


    
    res.send(posts);

});


blogRoutes.get("/:slug",async (req,res) => {
    const post = await Blog.findById(req.params.slug);
    post.category = await Category.findById(post.category);
    if(post){
    res.send(post);
    }else{
        res.status(404).send({message : "Not Found..."});
    }
});














export default blogRoutes;