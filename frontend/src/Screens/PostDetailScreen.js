import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../Actions/postActions';

export default function PostDetailScreen(props) {
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const postState = useSelector((state) => state.singlePost);
    const {loading,post,error} = postState;



    useEffect(() => {

        dispatch(fetchPost(id));


    },[dispatch,id])



    return (
        <div>
            {loading ? <h4>Loading...</h4> : error ? <h4 className="alert alert-danger">{error}</h4> : post ? 
            

            <div className="container">
                <div className="blog-detail-wrapper">
            <h4 className="blog-detail-title">{post.title}</h4> 
            <small>{post.category.name}</small>
            <hr/>
            <div className="blog-detail-img-wrapper"><img src={post.thumbnail} alt={post.title} /></div>
            <p className="blog-detail-content">
                {post.body}
            </p>
            <hr/>
            <div className="blog-detail-footer"><p>{post.author.name.toUpperCase()} <i className="fa fa-user"></i></p></div>
                </div>

            </div>
            
            
            
            
            
            : <h4 className="alert alert-danger">Not Found</h4> }
        </div>
    )
}
