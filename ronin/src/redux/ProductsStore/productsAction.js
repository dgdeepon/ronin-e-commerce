import { get, ref } from "firebase/database"
import { db } from "../../firebase/firebase"
import { GET_ERROR, GET_PRODUCTS, GET_REQ } from "./productsActions"




export const getProductsNow=(dispatch)=>{
    dispatch({type:GET_REQ});
    get(ref(db)).then((res)=>{
        dispatch({type:GET_PRODUCTS,payload:res.val().products});
    }).catch(()=>{
        dispatch({type:GET_ERROR});
    })
}