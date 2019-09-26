import Axios from 'axios';

export const getTransaction = (header) => {
    return {
        type: 'GET_TRANSACTION',
        payload: Axios.get(`http://192.168.6.159:4000/anekamusik/transaction/${header.user}`, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: header.token,
                user: header.user
            }
        })
    }
}


export const addTransaction = (data) => {
    return {
        type: 'POST_TRANSACTION',
        payload: Axios.post(`http://192.168.6.159:4000/anekamusik/transaction/${localStorage.getItem('userId')}`, data, {
            headers: {
                authorization: 'musicStoreHeaders',
                token: localStorage.getItem('token'),
                user: localStorage.getItem('userId')
            }
        })
    }
}