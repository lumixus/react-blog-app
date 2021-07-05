import axios from "axios";
import { CATEGORY_FETCH_FAIL, CATEGORY_FETCH_REQUEST, CATEGORY_FETCH_SUCCESS, NEW_CATEGORY_FAIL, NEW_CATEGORY_REQUEST, NEW_CATEGORY_SUCCESS } from "../Constants/categoryConstants"



export const newCategory = (category) => async (dispatch) => {
    dispatch({type : NEW_CATEGORY_REQUEST});
    try {
        const {data} = await axios.post("http://localhost:8080/api/category/new",category);
        dispatch({type : NEW_CATEGORY_SUCCESS, payload : data});
    } catch (error) {
        dispatch({type : NEW_CATEGORY_FAIL, payload : error});
    }
}


export const fetchCategories = () => async (dispatch) => {
    dispatch({type : CATEGORY_FETCH_REQUEST});
    try {
        const {data} = await axios.get("http://localhost:8080/api/category/");
        dispatch({type : CATEGORY_FETCH_SUCCESS, payload : data});
    } catch (error) {
        dispatch({type : CATEGORY_FETCH_FAIL, payload : error});
    }
}