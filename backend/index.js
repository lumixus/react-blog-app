import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import blogRoutes from "./Routes/blogRoutes.js"
import userRoute from "./Routes/userRoutes.js"

import mongoose from "mongoose"
import categoryRoutes from "./Routes/categoryRoutes.js"


mongoose.connect('mongodb://localhost/blogapp',{useNewUrlParser : true, useUnifiedTopology : true,useCreateIndex : true,});



const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

dotenv.config();


app.use("/api/user",userRoute);
app.use("/api/blog",blogRoutes);
app.use("/api/category",categoryRoutes);






app.listen(process.env.PORT || 3030, () => {

console.log(`Listening at http://localhost:${process.env.PORT}`);

})