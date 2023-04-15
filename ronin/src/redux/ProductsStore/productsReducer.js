import { GET_ERROR, GET_PRODUCTS, GET_REQ } from "./productsActions";

const init={
    data:[],
    isLoading:false,
    isError:false
}


const productsReducer=(state=init,action)=>{
    switch(action.type){
        case GET_REQ:
        return{
            ...state,
            data:[],
            isLoading:true,
            isError:false
        }
        case GET_PRODUCTS:
            return{
                ...state,
                data:action.payload,
                isLoading:false,
                isError:false
            }
        case GET_ERROR:
            return{
                ...state,
                isLoading:false,
                isError:true,
                data:[]
            }    
        default:
            return state;
    }
}


export default productsReducer;