import axios from 'axios'

const api = axios.create({
    baseURL: "https://projeto-15-1-conceitos-node-2-0.onrender.com"
})

export default api