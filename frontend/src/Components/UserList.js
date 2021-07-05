import React from 'react'
import {Link} from "react-router-dom"

export default function UserList(props) {
    const {user} = props;

    return (
        <div className="col-md-3">
         {user ? 
           <div>
            <div className="user-list-row"><Link className="user-list-link" to="/profile">Profile</Link></div>
            <div className="user-list-row"><Link className="user-list-link" to="/security">Security</Link></div>
           
            {user.isAdmin ? <div className="user-list-row"><Link className="user-list-link" to="/editor">Editor Area</Link></div> : null }
            
            </div>
            
            : null}

</div>
        
    )
}
