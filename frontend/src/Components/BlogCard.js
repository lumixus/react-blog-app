import React from 'react'

export default function BlogCard(props) {

    const {blog} = props;
    return (
        
        <div className="blog-list-wrapper" key={0}>
        <div className="row">
            <div className="col-md-3 blog-list-img-wrapper"><img className="blog-list-img" src={blog.thumbnail} alt="" /></div>
            <div className="col-md-9">
                <div className="blog-list-content">
                    <div className="mb-3"><small >{blog.category.name}</small></div>          
                    <div className="blog-list-title"><h3>{blog.title}</h3></div>
                    <div className="blog-list-body"><p>{blog.body.substring(0,50) + "..."}</p></div>
                    <div className="blog-list-author col-md-6">{blog.author.name.toUpperCase()} <i className="fa fa-user"></i></div>
                </div>
            </div>

        </div>

    </div>
    )
}
