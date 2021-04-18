import {useState} from 'react'
import axios from 'axios'


export default () => {

 

  function addToFav(id) {
    const [favList, setFavList] = useState([])
    favList.includes(id) ? setFavList(favList.filter(item => item !== id)) : setFavList([...favList,id])
    console.log(favList)
  
  }


  const getRequest = axios.create({
   
    baseURL: 'https://api.themoviedb.org/3/movie',
  } )
 
  const getMovieDetails = async (id) =>{

    const response = await getRequest.get(`/${id}`,{
      params:{
        api_key: '0ac3457a0aa995943c87e622ef7d3075', 
      }
    })

    const movieDetails = response.data
    return movieDetails
 
  
  }
  const getMovieRecommendations = async (id) =>{

    const response = await getRequest.get(`/${id}/recommendations`,{
      params:{
        api_key: '0ac3457a0aa995943c87e622ef7d3075', 
       
      }
    })

    const movieRecommend = response.data
    return movieRecommend
 
  
  }
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

 
 

  return { getMovies,getMovieDetails,getMovieRecommendations,addToFav}

}
