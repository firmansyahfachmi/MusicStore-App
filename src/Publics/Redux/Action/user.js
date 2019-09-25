import Axios from 'axios';


export const register = (data) => {
    return {
        type: 'REGISTER',
        payload: Axios.post('http://192.168.6.159:4000/anekamusik/user/register', data)
    }
}

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: Axios.post('http://192.168.6.159:4000/anekamusik/user/login', data)
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}