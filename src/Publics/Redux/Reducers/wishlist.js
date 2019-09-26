const initialState = {
    wishlistData: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const wishlist = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_WISHLIST_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'GET_WISHLIST_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'GET_WISHLIST_FULFILLED':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    wishlistData: action.payload.data.data,
            };
        case 'POST_WISHLIST_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'POST_WISHLIST_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'POST_WISHLIST_FULFILLED':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true
            };
        case 'DELETE_WISHLIST_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'DELETE_WISHLIST_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'DELETE_WISHLIST_FULFILLED':
            let new_items = state.wishlistData.filter(data => {
                return Number(data.id) !== Number(action.payload.data.data)

            })
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    wishlistData: new_items
            };
        default:
            return state;
    }
}

export default wishlist;