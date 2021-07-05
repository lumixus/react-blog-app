import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userRegister } from '../Actions/userActions';

export default function RegisterScreen(props) {
    const dispatch = useDispatch();
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passwordConfirm,setPasswordConfirm] = useState("");
    const [name,setName] = useState("");
    const {error,user} = useSelector(state => state.userLogin);
    const {loading,success} = useSelector(state => state.userRegister);

    const register = (e) => {
        e.preventDefault();
        if(password === passwordConfirm){
            dispatch(userRegister(username,password,email,name))
        }else{
            alert("Passwords are not matching !")
            return false;
        }

    }


    useEffect(() => {
        if(user){
            props.history.push("/");
        }
    },[props.history,user])


    return (
        <div className="container">
            <div className="login-wrapper">
                <div className="login-card">
                    <div className="login-card-title">
                    <h2>Register to World</h2>
                    </div>
                    <hr />
                    <div className="login-form">
                    <form onSubmit={register}>
                        <div className="form-group mb-4">
                            <label htmlFor="username">Username</label>
                            <input type="text" onChange={(e) => setUsername(e.target.value)} id="username" placeholder="Username" className="form-control" required autoComplete="off"/>
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" onChange={(e) => setName(e.target.value)} id="fullName" placeholder="Full Name" className="form-control" required autoComplete="off" />
                        </div>
                        <div className="form-group mb-4">
                            <label htmlFor="email">E-Mail</label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} id="email" placeholder="E-Mail" className="form-control" required autoComplete="off" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="form-control" required autoComplete="off" />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="passwordConfirm">Password Confirm</label>
                            <input type="password" id="passwordConfirm" onChange={(e) => setPasswordConfirm(e.target.value)} placeholder="Confirm Password" required className="form-control" autoComplete="off" />
                        </div>

                        <button className="btn btn-primary w-100 mt-5">{loading ? "Loading..." : "Register"}</button>

                        {error ? <div className="alert alert-primary mt-2">{error}</div> : null}
                        {success ? <div className="alert alert-success mt-2">Account created !</div> : null}


                        
                    </form>
                    </div>

                </div>

            </div>
            
        </div>
    )
}
