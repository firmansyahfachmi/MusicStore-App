import Axios from 'axios';

export const getCategory = () => {
    return {
        type: 'GET_CATEGORY',
        payload: Axios.get('http://139.59.231.85/v1/category')
    }
}