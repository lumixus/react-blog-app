import React from 'react'
import UserList from '../Components/UserList'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'


export default function EditorScreen() {

    const userState = useSelector(state => state.userLogin);
    const {user} = userState;
    return (
        <div className="container">
        <div className="content-wrapper mt-5">
            <div className="row user-list">
                <UserList user={user}></UserList>
                <div className="col-md-9"><h2>EDITOR</h2>
                
                <div><Link to="/new-post" className="btn btn-primary">New Post</Link></div>
                <div className="mt-3"><Link to="/new-category" className="btn btn-primary">New Category</Link></div>
                
                
                </div>


            </div>
        </div>
    </div>
    )
}
