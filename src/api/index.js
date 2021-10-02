import axios from "axios"

const serverADDR = process.env.SERVER_APP || 'localhost'

const instance = axios.create({
    baseURL: `http://${serverADDR}:5000/api`,
    timeout: 1000,
});

export const showTable = (id) => {
    const isId = id ? `?id=${id}` : ''
    return instance.get(`/showtable${isId}`)
}
