import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { newCategory } from '../Actions/categoryActions';
// import { newCategory } from '../Actions/categoryActions';

export default function NewPostScreen(props) {
    const dispatch = useDispatch();
    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");
    const userState = useSelector(state => state.userLogin);
    const categoryState = useSelector(state => state.newCategory);
    const {user} = userState;

    const {loading,category,error} = categoryState;
    


    useEffect(() => {
        if(!user.isAdmin){
            props.history.push("/");
        }

    },[user,props.history])

   // const {loading,success,error} = categoryState;

    const postHandler = (e) => {
        e.preventDefault();
        dispatch(newCategory({name : title,description : description}));
    }








    return (
        <div className="container mt-5">
            <div className="content-wrapper">
                <h2 style={{paddingLeft:"25px"}}>New Category</h2>
                <hr />
                <div className="p-5">
                <form onSubmit={postHandler} className="blog-form">
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" onChange={(e) => setTitle(e.target.value)} className="form-control" placeholder="Title" />
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} className="form-control" placeholder="Description" />
                </div>
                <div className="mt-5"><button className="btn btn-primary">{loading ? "Loading..." : "Add Category" }</button></div>
               
                <div className="col-md-12 mt-4">{category ? <h4 className="alert alert-success">Category Added</h4> : error ?  <h4 className="alert alert-danger">{error}</h4>   : null}</div>

                </form>
                </div>
                </div>
        </div>
    )
}
