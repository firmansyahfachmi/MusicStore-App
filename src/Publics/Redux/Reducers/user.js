const initialState = {
    currentUser: [],
    isLoading: false,
    isFulfilled: false,
    isRejected: false,
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'REGISTER_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'REGISTER_FULFILLED':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true

            };
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoading: true,
                    isRejected: false,
                    isFulfilled: false,
            };
        case 'LOGIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                    isRejected: true,
            };
        case 'LOGIN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    currentUser: action.payload.data.data


            };
        case 'LOGOUT':
            return {
                ...state,
                isLoading: false,
                    isFulfilled: true,
                    currentUser: {}
            }
            default:
                return state;
    }
}

export default user;