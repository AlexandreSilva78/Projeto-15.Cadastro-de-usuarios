import axios from 'axios'

const api = axios.create({
    baseURL: 'https://cadastro-usuarios-backend.onrender.com'
})

export default api