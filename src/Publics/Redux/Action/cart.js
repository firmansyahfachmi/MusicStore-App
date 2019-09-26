import Axios from 'axios';

export const getCart = (id, header) => {
    return {
        type: 'GET_CART',
        payload: Axios.get(`http://192.168.6.159:4000/anekamusik/cart/${id}`, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: header.token,
                user: header.user
            }
        })
    }
}

export const addCart = (data, header) => {
    return {
        type: 'POST_CART',
        payload: Axios.post(`http://192.168.6.159:4000/anekamusik/cart/${header.user}`, data, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: header.token,
                user: header.user
            }
        })
    }
}

export const editCart = (data, header) => {
    return {
        type: 'PATCH_CART',
        payload: Axios.patch(`http://192.168.6.159:4000/anekamusik/cart/${header.user}/${data.id}`, data, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: header.token,
                user: header.user,
            }
        })
    }
}

export const deleteCart = (uid, id, header) => {
    return {
        type: 'DELETE_CART',
        payload: Axios.delete(`http://192.168.6.159:4000/anekamusik/cart/${uid}/${id}`, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: header.token,
                user: header.user,
            }
        })
    }
}