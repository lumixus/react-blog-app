import mongoose from "mongoose"



const {Schema} = mongoose;



  const blogSchema = new Schema({

    title : {type : String,required : true},
    author : {id : {ref : "User", type : mongoose.Schema.Types.ObjectId, required : true}, name : {type: String, required : true}},
    body : {type : String, required : true},
    category : {ref : "Category", type : mongoose.Schema.Types.ObjectId, required : true},
    thumbnail : {type : String,required : false},
    comments : [{body : {type : String, required : true}, author : {id: {ref : "User",type : mongoose.Schema.Types.ObjectId,required : true},name :{type : String,required :true}}, date : {type : Date,default : Date.now}}],
    hidden : {type : Boolean,required : true,default : false},
    meta : {
        likes : {type : Number, default : 0},
        dislikes : {type : Number,default : 0}
    }



},
{timestamps : true }

)

const Blog = mongoose.model("Blog",blogSchema); 


export default Blog;


