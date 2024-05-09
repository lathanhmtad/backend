import axios from "axios"

export const registerNewUser = (email, phone, username, password) => {
    return axios.post('http://localhost:8888/api/v1/register', {
        email, phone, username, password
    })
}

export const loginUser = (valueLogin, password) => {
    return axios.post('http://localhost:8888/api/v1/register', {
        valueLogin, password
    })
}