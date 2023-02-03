import Axios from 'axios';



export const getWishlist = (id, header) => {
    return { 
        type: 'GET_WISHLIST',
        payload: Axios.get(`http://139.59.231.85/v1/wishlist/${id}`, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: header.token,
                user: header.user
            }
        })
    }
}

export const addWishlist = (data, id, header) => {
    return {
        type: 'POST_WISHLIST',
        payload: Axios.post(`http://139.59.231.85/v1/wishlist/${id}`, data, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: header.token,
                user: header.user,
            }
        })
    }
}

export const deleteWishlist = (uid, id, header) => {
    return {
        type: 'DELETE_WISHLIST',
        payload: Axios.delete(`http://139.59.231.85/v1/wishlist/${uid}/${id}`, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: header.token,
                user: header.user,
            }
        })
    }
}