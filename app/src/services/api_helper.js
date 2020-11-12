import axios from 'axios';
const fileDownload = require('js-file-download');

export const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

export const registerUser = async (registerData) => {
    console.log(registerData)
    const resp = await api.post('/users/', registerData).catch((err) => (err.response));
    if (resp.status < 400 ) {
        localStorage.setItem('authToken', resp.data.access);
    }
    // api.defaults.headers.common.authorization = `Bearer ${resp.data.access}`;
    return resp
}

export const loginUser = async (loginData) => {
    const resp = await api.post('/token/', loginData).catch((err) => (err.response));
    if (resp.status < 400 ) {
        localStorage.setItem('authToken', resp.data.access);
    }
    return resp;
}

export const getImageById = async (id) => {
    const resp = await api.get(`/images/${id}`)
    .then(resp =>{return resp.data[0]});
    return resp   
}

export const editImage = async (id, edits) => {
    let actions = ''
    let changes = ''
    // Creates comma delimited strings with each method
    for (const key in edits) {
        actions += key + ','
        changes += edits[key] +','
    }
    await api.put(`/edit/image/${id}/${actions.slice(0,-1)}/${changes.slice(0,-1)}/`).then(resp => console.log(resp))
}

export const uploadImage =  (e, creatorId, title='none') => {
    e.preventDefault()
    const token = localStorage.getItem('authToken');
    console.log(token)
    const payload = new FormData()
    payload.append('path', e.target[0].files[0])
    payload.append('title', title)
    payload.append('creator', creatorId)
    api.post('/images/', payload, {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
    }
    }).then(resp =>{
        console.log(resp)
    }).catch(err => {
        console.log(err)
    })
}


export const downloadImage = (e, id, fileName) => {
    e.preventDefault()
    api.get(`/download/${id}`,{
        responseType: 'blob'
    }).then(resp => {
        // I hate this code so much, but it works
        console.log(resp)
        const url = window.URL.createObjectURL(new Blob([resp.data]))
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link)
        link.click();
        link.remove();
    }).catch(err => {console.log(err)})
}