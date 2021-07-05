import React from 'react'
import { useSelector } from 'react-redux';
import UserList from '../Components/UserList'

export default function SecurityScreen() {
    const userState = useSelector(state => state.userLogin);
    const {user} = userState;
    return (
        <div className="container">
            <div className="content-wrapper mt-5">
                <div className="row user-list">
                    <UserList user={user}></UserList>
                    <div className="col-md-9"><h2>SECURITY</h2></div>
                </div>
            </div>
        </div>
    )
}
