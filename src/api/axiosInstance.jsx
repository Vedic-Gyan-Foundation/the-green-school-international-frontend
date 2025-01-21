import axios from 'axios'

export const baseURL = 'https://greenschool.ekodusproject.tech/storage/'
const instance = axios.create({
    baseURL:'https://greenschool.ekodusproject.tech/api/'
})

export default instance;