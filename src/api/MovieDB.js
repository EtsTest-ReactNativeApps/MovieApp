import axios from 'axios'


export default () => {

  const getRequest = axios.create({
   
    baseURL: 'https://api.themoviedb.org/3/movie',
  } )
 

  const getMovies = async (type,pageParam) =>{

    const response = await getRequest.get(`/${type}`,{
      params:{
        api_key: '0ac3457a0aa995943c87e622ef7d3075',
        language: 'en-US',
        page:  pageParam,
       
      }
    })
   
    const movies = response.data
    return movies
 
  
  }

 
 

  return { getMovies}

}
