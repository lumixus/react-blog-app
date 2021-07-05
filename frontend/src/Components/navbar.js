import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import { userLogout } from '../Actions/userActions';



export default function Navbar() {
    const dispatch = useDispatch();
    const userLoginState = useSelector(state => state.userLogin);
    const {user} = userLoginState;


    const signout = (e) => {
        e.preventDefault();
        dispatch(userLogout());

    }

    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="navbar-color"></div>
                    <div className="container-fluid">
                        
                        <Link className="navbar-brand" to="/">Global Posts</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/top-posts">Top Posts</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="">Categories</Link>
                            </li>
                           {user && user.isAdmin ?  <li className="nav-item"> 
                            <Link className="nav-link" to="/new-post">New Post</Link>
                            </li> : null }
                        
                        </ul>
                        <ul className="navbar-nav justify-content-right">
                        

                        {user === null ? <li className="nav-item"><Link to="/login" className="nav-link"><i className="fa fa-user" style={{fontSize:"36px"}}></i></Link></li> :
                            <li className="nav-item"><Link to="/profile" className="nav-link"><i className="fa fa-user" style={{fontSize:"36px"}}></i></Link></li>
                    }
                        {user !== null ?
                        
                        <li className="nav-item px-3"><Link to="" onClick={signout} className="nav-link"><i className="fa fa-sign-out-alt" style={{fontSize :"36px"}}></i></Link></li> : 
                        <li className="nav-item px-3"><Link to="/register" className="nav-link"><i className="fa fa-user-plus" style={{fontSize :"36px"}}></i></Link></li>

                    }
                        </ul>
                        </div>
                    </div>
                    </nav>
        </div>
    )
}
