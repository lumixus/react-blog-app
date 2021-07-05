import React, { useEffect } from 'react'
import {useSelector } from 'react-redux'
import UserList from '../Components/UserList';

export default function UserScreen(props) {
    const userLoginState = useSelector(state=>state.userLogin);
    const {user} = userLoginState;
    useEffect(() => {
        if(!user){
            props.history.push("/login");
        }
    },[user,props.history])
    return (
        <div className="container">
            <div className="content-wrapper mt-5">
                <div className="row user-list">
                    <UserList user={user}></UserList>
                    <div className="col-md-9"><h2>PROFILE</h2></div>
                </div>
            </div>
        </div>
    )
}
