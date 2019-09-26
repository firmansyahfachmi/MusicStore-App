const initialState = {
    cartData: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,

};

const cart = (state = initialState, action) => {
    switch (action.type) {

        case 'GET_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'GET_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'GET_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    cartData: action.payload.data.data,
            };
        case 'POST_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'POST_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'POST_CART_FULFILLED':

            let addedItem = state.cartData.find(item => item.id_product === action.payload.data.data.id_product)

            let existed_item = state.cartData.find(item => action.payload.data.data.id_product === item.id_product)
            if (existed_item) {
                addedItem.quantity += 1

            } else {
                state.cartData.push(action.payload.data.data)

            };
            return {
                ...state,
                cartData: [...state.cartData]
            };
        case 'PATCH_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'PATCH_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'PATCH_CART_FULFILLED':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true
            };
        case 'DELETE_CART_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'DELETE_CART_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'DELETE_CART_FULFILLED':
            let new_items = state.cartData.filter(cart => {
                return Number(cart.id) !== Number(action.payload.data.data)

            })

            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    cartData: new_items
            };
        default:
            return state;
    }
}

export default cart;