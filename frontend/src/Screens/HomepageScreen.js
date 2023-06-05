import React, { useEffect } from 'react'
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../Actions/postActions.js';
import BlogCard from "../Components/BlogCard.js"
export default function HomepageScreen() {
    const dispatch = useDispatch();
    const postsState = useSelector(state => state.postFetch);
    const {loading,posts,error} = postsState;


    useEffect(() => {
            dispatch(fetchPosts());
    },[dispatch])




    return (
        <div className="container">
            <div className="content-wrapper mt-5 mb-5">
                <h3 className="mb-5">Top Blogs Today </h3>
                <hr />
                  {loading ? (<h3>Loading...</h3>) : error ? (<h3>{error}</h3>) : posts.length > 0 ? (<div>
                      {posts.map((p) => 
                      <Link key={p._id} to={"/post/"+p._id} style={{textDecoration:"none",color:"white"}}>
                          <BlogCard blog={p} key={p._id} />
                      </Link>
                      )}
                

                  </div>) : (<h4 className="alert alert-danger">Not found...</h4>)}

            </div>
        </div>
    )
}
