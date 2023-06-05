import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../Actions/postActions';

export default function PostDetailScreen(props) {
    const id = props.match.params.id;
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userLogin);
    const postState = useSelector((state) => state.singlePost);
    const {loading,post,error} = postState;
    const {user} = userState;



    useEffect(() => {

        dispatch(fetchPost(id));



    },[dispatch,id])



    return (
        <div>
            {loading ? <h4>Loading...</h4> : error ? <h4 className="alert alert-danger">{error}</h4> : post ? 
            

            <div className="container">
                <div className="blog-detail-wrapper">
            <h4 className="blog-detail-title">{post.title}</h4> 
            <div className="d-flex justify-content-between">
            <small>{post.category.name}</small>{user === null ? null : user.isAdmin ? <div style={{fontSize:"24px"}}><Link to={"/edit/post/"+post._id}> EDIT <i className="fa fa-pen"></i></Link></div> : null}
            </div>
            <hr/>
            <div className="blog-detail-img-wrapper"><img src={post.thumbnail} alt={post.title} /></div>
            <p className="blog-detail-content">
                {post.body}
            </p>
            <hr/>
            <div className="blog-detail-footer"><p>{post.author.name.toUpperCase()} <i className="fa fa-user"></i></p></div>
            <hr />

            <div className="comment-wrapper">
                    <h3>COMMENTS</h3>
                    <div className="writeComment">
                        <h5>Write a comment</h5>
                        <textarea name="comment" id="" cols="30" rows="5" className="form-control"></textarea>
                    </div>
                    <div className="commentButton">
                        <button className="btn btn-primary w-25 mt-2">POST</button>
                    </div>
                    <h3>ALL COMMENTS</h3>
                    <div className="allComments mt-5">
                        <div className="comment">
                        <div className="row">
                            <div className="col-md-2 comment-img">IMG HERE</div>
                            <div className="col-md-10 comment-name">NAME HERE</div>
                            <div className="col-md-12 comment-detail mt-2">COMMENT HERE</div>
                        </div>
                        </div>
                    </div>
                </div>

                </div>



              

            </div>
            
            
            
            
            
            : <h4 className="alert alert-danger">Not Found</h4> }
        </div>
    )
}
