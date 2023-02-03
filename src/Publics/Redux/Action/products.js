import Axios from 'axios';

export const getProducts = (category, search, page) => {
    let url = ``;
    if (search !== null && search !== undefined) {
        url = `http://139.59.231.85/v1/products/search/${search}?page=${page}`;
    } else {
        url = `http://139.59.231.85/v1/products/${category}?page=${page}`;
    }

    return {
        type: 'GET_PRODUCTS',
        payload: Axios.get(url)
    }
}

export const getProductsList = () => {
    let url = ``;
    url = `http://139.59.231.85/v1/products`;

    return {
        type: 'GET_PRODUCTS',
        payload: Axios.get(url)
    }
}

export const getProductsDetail = (name) => {
    return {
        type: 'GET_PRODUCTS_DETAIL',
        payload: Axios.get(`http://139.59.231.85/v1/products/detail/${name}`)
    }
}