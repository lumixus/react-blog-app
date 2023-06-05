import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../Actions/categoryActions';
import { fetchPost, updatePost } from '../Actions/postActions';

export default function EditPostScreen(props) {
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const [title,setTitle] = useState("");
    const [category,setCategory] = useState("");
    const [content,setContent] = useState("");
    const [thumbnail,setThumbnail] = useState([]);
    const userState = useSelector((state)=> state.userLogin);
    const {user} = userState;
    const postState = useSelector((state) => state.singlePost);
    const categoriesState = useSelector((state) => state.categories);
    const {categories} = categoriesState;
    const {loading,post,error} = postState;
    const postUpdateState = useSelector((state) => state.postUpdate);
    const {updateLoading,updateSuccess,updateError} = postUpdateState;



    const postHandler = (e) => {

        e.preventDefault();
        console.log(thumbnail);
        dispatch(updatePost({post : {_id : post._id,title : title,body : content,category : category}}));
        


    }

    useEffect(() => {
        if(!post){
        dispatch(fetchPost(id));
        dispatch(fetchCategories());
    }else{
        setTitle(post.title);
        setContent(post.body);
        setCategory(post.category._id);
        }


        if(user){
            if(user.isAdmin === false){
                props.history.push("/");
            }
        }else{
            props.history.push("/");
        }
        

    },[dispatch,id,post,user,props.history])


    return (
        <div className="container">
            <div className="content-wrapper">
                {loading ? <h4>Loading...</h4> : error ? <h4>{error}</h4> : post ?
                <div>
                <h2 style={{paddingLeft:"25px"}}>New Post</h2>
                <hr />
                <div className="p-5">
                <form onSubmit={postHandler} className="blog-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Title" />
                    <label htmlFor="category">Category</label>
                    <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="form-control">
                        {categories ? categories.map( c => <option value={c._id} key={c._id}> {c.name}</option>) : <option>Loading...</option>}
                    </select>
                    <label htmlFor="content">Content</label>
                    <input type="text" onChange={(e) => setContent(e.target.value)} value={content} id="content" className="form-control" placeholder="Content" />
                    <label htmlFor="">Thumbnail</label><br />
                <input type="file" onChange={setThumbnail} name="file" id="file" />

                <button type="submit" className="btn btn-primary w-100">{updateLoading ? "Posting..." : "POST"}</button>
                {updateSuccess ? (<h3 className="alert alert-success mt-4">Post Updated</h3>) : updateError ? (<h3 className="alert alert-danger">{updateError}</h3>) : null}
                </div>
                </form>
                </div> 
                </div>
             : null}
                </div>

            
        </div>
    )
}
