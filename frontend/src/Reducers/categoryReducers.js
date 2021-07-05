import { CATEGORY_FETCH_FAIL, CATEGORY_FETCH_REQUEST, CATEGORY_FETCH_SUCCESS, NEW_CATEGORY_REQUEST, NEW_CATEGORY_SUCCESS } from "../Constants/categoryConstants";
import { NEW_POST_FAIL } from "../Constants/postConstants";



export const newCategoryReducer = (state = {},action) =>{
    switch (action.type) {
        case NEW_CATEGORY_REQUEST:
            return {loading:true}
            
        case NEW_CATEGORY_SUCCESS:
            return{loading : false, category : action.payload}

        case NEW_POST_FAIL:
            return {loading:false, error : action.payload}
        default:
            return state;
    }
}


export const categoriesReducer = (state = {},action) =>{
    switch (action.type) {
        case CATEGORY_FETCH_REQUEST:
            return {cloading:true}
            
        case CATEGORY_FETCH_SUCCESS:
            return{cloading : false, categories : action.payload}

        case CATEGORY_FETCH_FAIL:
            return {cloading:false, cerror : action.payload}
        default:
            return state;
    }
}


