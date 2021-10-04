import axios from "axios"

const serverADDR = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : ''

const instance = axios.create({
    baseURL: `${serverADDR}/api`,
    timeout: 1000,
});

export const showTable = (id) => {
    const isId = id ? `?id=${id}` : ''
    return instance.get(`/showtable${isId}`)
}
