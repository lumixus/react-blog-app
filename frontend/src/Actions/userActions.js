import axios from "axios"
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../Constants/userConstants";



export const userLogin = (username,password) => async (dispatch) => {
    dispatch({type:USER_LOGIN_REQUEST});
    try {
 
    const {data} = await axios.post("http://localhost:8080/api/user/login",{username,password});
    dispatch({type : USER_LOGIN_SUCCESS,payload : data});
    localStorage.setItem("user",JSON.stringify(data));

    } catch (error) {
            dispatch({type : USER_LOGIN_FAIL,payload : error.response && error.response.data.message ? error.response.data.message : error.message});
    }



}

export const userRegister = (username,password,email,name) => async (dispatch) => {

    dispatch({type : USER_REGISTER_REQUEST });
    try {
        const {data} = await axios.post("http://localhost:8080/api/user/register",{username : username,password : password, email : email, name : name});
        dispatch({type : USER_REGISTER_SUCCESS});
        dispatch({type : USER_LOGIN_SUCCESS, payload : data});
        localStorage.setItem("user",JSON.stringify(data));
    } catch (error) {
        dispatch({type : USER_REGISTER_FAIL, payload : error.response && error.response.data.message ? error.response.data.message : error.message});
    }


}



export const userLogout = () => (dispatch) => {

    localStorage.removeItem("user");
    dispatch({type : USER_LOGOUT});
}