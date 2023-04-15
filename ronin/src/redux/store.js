import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import productsReducer from "./ProductsStore/productsReducer";
import thunk from "redux-thunk";




const rootReducer=combineReducers({
    productsReducer
});


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));