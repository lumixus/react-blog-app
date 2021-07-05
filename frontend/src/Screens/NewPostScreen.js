import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../Actions/categoryActions';
import { newPost } from '../Actions/postActions';

export default function NewPostScreen() {
    const [thumbnail,setThumbnail] = useState([]);
    const [title,setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category,setCategory] = useState("");
    const dispatch = useDispatch();
    const postState = useSelector(state => state.post);
    const categoryState = useSelector(state => state.categories);
    const { categories} = categoryState;
    const userState = useSelector(state => state.userLogin)
    const {user} = userState;
    const {loading,success,error} = postState;

    const postHandler = (e) => {
        e.preventDefault();
     
   
        dispatch(newPost({title : title,author : {id : user._id, name : user.name},body: content,thumbnail : thumbnail, category : category}));


    }



    useEffect(() =>{
        const reader = new FileReader();
        if(!categories){
            dispatch(fetchCategories());
        }
        if(thumbnail.target){
        reader.readAsDataURL(thumbnail.target.files[0]);
        }

        reader.addEventListener("load",function(){
            setThumbnail(reader.result);
            
        })

        if(categories){
            setCategory(categories[0]._id);
        }


        
    },[dispatch,categories,thumbnail])





    return (
        <div className="container mt-5">
            <div className="content-wrapper">
                <h2 style={{paddingLeft:"25px"}}>New Post</h2>
                <hr />
                <div className="p-5">
                <form onSubmit={postHandler} className="blog-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Title" />
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" onChange={(e) => setCategory(e.target.value)} className="form-control">
                        {categories ? categories.map( c => <option value={c._id}>{c.name}</option>) : <option>Loading...</option>}
                    </select>
                    <label htmlFor="content">Content</label>
                    <input type="text" onChange={(e) => setContent(e.target.value)} id="content" className="form-control" placeholder="Content" />
                    <label htmlFor="">Thumbnail</label><br />
                <input type="file" onChange={setThumbnail} name="file" id="file" />

                <button type="submit" className="btn btn-primary w-100">{loading ? "Posting..." : "POST"}</button>
                {success ? (<h3 className="alert alert-success mt-4">Post added</h3>) : error ? (<h3 className="alert alert-danger">{error}</h3>) : null}
                </div>
                </form>
                </div>
                </div>
        </div>
    )
}
