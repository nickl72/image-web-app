import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

export const registerUser = async (registerData) => {
    console.log(registerData)
    const resp = await api.post('/users/', registerData);
    return resp.data
}
