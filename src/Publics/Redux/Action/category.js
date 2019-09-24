import Axios from 'axios';

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: Axios.get('http://192.168.6.159:4000/anekamusik/category')
    }
}