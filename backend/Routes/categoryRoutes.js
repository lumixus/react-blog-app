import express from "express"
import Category from "../Models/categorySchema.js";




const categoryRoutes = express.Router();


categoryRoutes.post("/new",async(req,res) => {   
    
    const category = new Category(req.body);
    
    category.save(); 

    if(category){
        res.send({success : true});
    }else{
        res.send({success : false});
    } 
    
    });


categoryRoutes.get("/",async (req,res) => {
    const category = await Category.find({});
    res.send(category);

});


categoryRoutes.get("/:slug",async (req,res) => {
    const category = await Category.findById(req.params.slug);
    if(category){
    res.send(category);
    }else{
        res.status(404).send({message : "Not Found..."});
    }
})




export default categoryRoutes;