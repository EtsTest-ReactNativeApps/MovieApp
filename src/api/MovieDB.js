import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: {
    Authorization:
      'Bearer  0ac3457a0aa995943c87e622ef7d3075',
  },
})
