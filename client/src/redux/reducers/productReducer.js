import * as actionType from '../constants/productConstant'

//state empty array of objects
export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_SUCCESS:
            return { products: action.payload };
        case actionType.GET_PRODUCT_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
}
//state empty single object
export const getProductDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return { product: action.payload };
        case actionType.GET_PRODUCT_DETAIL_FAIL:
            return { error: action.payload };
        default:
            return state;
    }
}