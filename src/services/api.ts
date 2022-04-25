import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://safe-woman.vercel.app/api'
})