import axios from 'axios'

const baseUrl = 'https://projectmanager-backend.onrender.com'
const AxiosInstance = axios.create({
    baseURL : baseUrl,
    timeout:5000,
    headers:{
        "Content-Type":" application/json",
        Accept:" application/json"
    }
})

export default AxiosInstance