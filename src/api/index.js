import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 1000,
});

export const showTable = (id) => {
    const isId = id ? `?id=${id}` : ''
    return instance.get(`/showtable${isId}`)
}
