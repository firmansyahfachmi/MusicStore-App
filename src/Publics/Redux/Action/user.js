import Axios from 'axios';


export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: Axios.post('http://139.59.231.85/v1/user/register', data)
    }
}

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: Axios.post('http://139.59.231.85/v1/user/login', data)
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}