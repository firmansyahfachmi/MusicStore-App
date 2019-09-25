const initialState = {
    productsData: [],
    detailData: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const products = (state = initialState, action) => {
    switch (action.type) {

        //GET PRODUCTS///////////////////////////////////////////////////////////////////////////////
        case 'GET_PRODUCTS_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'GET_PRODUCTS_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'GET_PRODUCTS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    productsData: action.payload.data.data,

            };


            //GET PRODUCTS DETAIL///////////////////////////////////////////////////////////////////////////////
        case 'GET_PRODUCTS_DETAIL_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'GET_PRODUCTS_DETAIL_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'GET_PRODUCTS_DETAIL_FULFILLED':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    detailData: action.payload.data.data
            };
 
        default:
            return state;
    }
}

export default products;