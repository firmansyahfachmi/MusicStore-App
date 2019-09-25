import Axios from 'axios';

export const getProducts = (category, search, page) => {
    let url = ``;
    if (search !== null && search !== undefined) {
        url = `http://192.168.6.159:4000/anekamusik/products/search/${search}?page=${page}`;
    } else {
        url = `http://192.168.6.159:4000/anekamusik/products/${category}?page=${page}`;
    }

    return {
        type: 'GET_PRODUCTS',
        payload: Axios.get(url)
    }
}

export const getProductsDetail = (name) => {
    return {
        type: 'GET_PRODUCTS_DETAIL',
        payload: Axios.get(`http://192.168.6.159:4000/anekamusik/products/detail/${name}`)
    }
}