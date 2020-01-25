import axios from 'axios'

// const clienteAxios = axios.create({
//   baseURL: 'http://localhost:4000'
// })
const clienteAxios = axios.create({
  baseURL: 'https://my-json-server.typicode.com/OzkrMonroy/luxury-data/'
})

export const getHomeData = () => clienteAxios.get('/homeData')
export const getPortfolioData = () => clienteAxios.get('/portfolio-data')