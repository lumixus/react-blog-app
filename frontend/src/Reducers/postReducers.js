import {POST_UPDATE_REQUEST,POST_UPDATE_SUCCESS,POST_UPDATE_FAIL, NEW_POST_FAIL, NEW_POST_REQUEST, NEW_POST_SUCCESS, POST_FETCH_FAIL, POST_FETCH_REQUEST, POST_FETCH_SUCCESS, SINGLE_POST_FETCH_FAIL, SINGLE_POST_FETCH_REQUEST, SINGLE_POST_FETCH_SUCCESS } from "../Constants/postConstants";



export const postReducers = (state = {},action) => {
    switch (action.type) {
        case NEW_POST_REQUEST:
            return {loading : true};
        case NEW_POST_SUCCESS:
            return {loading : false, success : action.payload};
        case NEW_POST_FAIL:
            return {loading:false, error : action.payload}
        default:
            return state;
    }
}



export const postFetchReducers = (state = {posts : []},action) => {
    switch (action.type) {
        case POST_FETCH_REQUEST:
            return {loading : true}
            
        case POST_FETCH_SUCCESS:
            return {loading:false, posts : action.payload }
    
        case POST_FETCH_FAIL:
            return {loading:false, error : action.payload}
        default:
            return state;
    }
}



export const singlePostReducer = (state = {},action) => {
    switch (action.type) {
        case SINGLE_POST_FETCH_REQUEST:
            return {loading:true};
            
        case SINGLE_POST_FETCH_SUCCESS:
            return {loading:false, post : action.payload};
        
        case SINGLE_POST_FETCH_FAIL:
            return {loading:false,error : action.payload};
        default:
            return state;
    }
}


export const postUpdateReducer = (state = {},action) => {
    switch (action.type) {
        case POST_UPDATE_REQUEST:
            return {updateLoading : true}
            
        case POST_UPDATE_SUCCESS:
            return{updateLoading : false, updateSuccess : action.payload}
        case POST_UPDATE_FAIL:
            return{updateLoading : false, updateError : action.payload }
            
        default:
            return state;
    }
}