import axios from "axios";
import { NEW_POST_FAIL, NEW_POST_REQUEST, NEW_POST_SUCCESS, POST_FETCH_FAIL, POST_FETCH_REQUEST, POST_FETCH_SUCCESS, POST_UPDATE_FAIL, POST_UPDATE_REQUEST, POST_UPDATE_SUCCESS, SINGLE_POST_FETCH_FAIL, SINGLE_POST_FETCH_REQUEST, SINGLE_POST_FETCH_SUCCESS } from "../Constants/postConstants";



export const newPost = (post) => async (dispatch) => {
    dispatch({type : NEW_POST_REQUEST});
    try {
        const result = await axios.post("http://localhost:8080/api/blog/new",post);
        dispatch({type : NEW_POST_SUCCESS, payload : result})
    } catch (error) {
        dispatch({type : NEW_POST_FAIL,payload : error.response && error.response.data.message ? error.response.data.message : error.message});
    }
}



export const fetchPosts = () => async (dispatch) => {
    dispatch({type : POST_FETCH_REQUEST});
    try {
        const {data} = await axios.get("http://localhost:8080/api/blog/");
        dispatch({type : POST_FETCH_SUCCESS, payload : data});
    } catch (error) {
        dispatch({type : POST_FETCH_FAIL,payload : error.response && error.response.data.message ? error.response.data.message : error.message});
        
    }
}


export const fetchPost = (id) => async (dispatch) => {
    dispatch({type : SINGLE_POST_FETCH_REQUEST});
    try {
        const {data} = await axios.get("http://localhost:8080/api/blog/"+id);
        dispatch({type:SINGLE_POST_FETCH_SUCCESS, payload : data});
    } catch (error) {
        dispatch({type:SINGLE_POST_FETCH_FAIL, payload : error.response && error.response.data.message ? error.response.data.message : error.message});
    }
}


export const updatePost = (post) => async (dispatch,getState) => {
    dispatch({type : POST_UPDATE_REQUEST});
    const {userLogin : {user}} = getState();
    try {
        const {data} = await axios.put("http://localhost:8080/api/blog/update",post,{headers : {
            'Authorization': 'Bearer '+user.token
        }});
        dispatch({type:POST_UPDATE_SUCCESS,payload : data})
    } catch (error) {
        dispatch({type:POST_UPDATE_FAIL, payload : error.response && error.response.data.message ? error.response.data.message : error.message});
    }
    
}