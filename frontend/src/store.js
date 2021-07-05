import { applyMiddleware, combineReducers, compose, createStore } from "redux";

import thunk from "redux-thunk"
import { categoriesReducer, newCategoryReducer } from "./Reducers/categoryReducers";
import { postFetchReducers, postReducers, singlePostReducer } from "./Reducers/postReducers";
import { userReducer, userRegisterReducer } from "./Reducers/userReducers";
const initialState = {

userLogin : {user : localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null }

}


const reducer = combineReducers({
    userLogin : userReducer,
    userRegister : userRegisterReducer,
    post : postReducers,
    postFetch : postFetchReducers,
    singlePost : singlePostReducer,
    newCategory : newCategoryReducer,
    categories : categoriesReducer
})




const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , initialState,composeEnhancer(applyMiddleware(thunk)));



export default store;