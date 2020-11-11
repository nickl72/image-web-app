import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

export const registerUser = async (registerData) => {
    const resp = await api.post('/users/', registerData);
    return resp.data
}

export const getImageById = async (id) => {
    const resp = await api.get(`/images/${id}`)
    .then(resp =>{return resp.data[0]});
    return resp   
}

export const editImage = async (id, edits) => {
    const actions = 'blur,red'
    const changes = 'fsa'
    await api.put(`/edit/image/${id}/${actions}/${changes}/`).then(resp => console.log(resp))
}