import React, { useEffect, useState } from 'react'
import {userLogin} from "../Actions/userActions";
import { useDispatch, useSelector } from 'react-redux';

export default function LoginScreen(props) {
    const dispatch = useDispatch();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const userLoginState = useSelector(state => state.userLogin);

    const {user,loading,error} = userLoginState;

    const login = (e) => {
        e.preventDefault();
        dispatch(userLogin(username,password))
    }

    useEffect(() => {
        if(user){
        props.history.push("/");
        }

    },[props,user]);


    



    return (
        <div className="container">
            <div className="login-wrapper">
                <div className="login-card">
                    <div className="login-card-title">
                    <h2>Global Posts</h2>
                    </div>
                    <hr />
                    <div className="login-form">
                    <form onSubmit={login}>
                        <div className="form-group mb-4">
                            <label htmlFor="username">Username</label>
                            <input type="text" onChange={(e) => setUsername(e.target.value)} id="username" placeholder="Username" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" />
                        </div>

                        <button className="btn btn-primary w-100 mt-5">{loading ? "Loading" : "Login"}</button>

                        {error ? <div className="alert alert-primary mt-2">{error}</div> : null}

                        
                    </form>
                    </div>

                </div>

            </div>
            
        </div>
    )
}
