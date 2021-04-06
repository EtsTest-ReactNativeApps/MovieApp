import React,{useState} from 'react'
// import {QueryClient, QueryClientProvider, useQuery } from 'react-query'
import ContainerView from '../../components/layout/ContainerView'
import Typography from '../../components/core/Typography'
import MovieCard from 'components/core/MovieCard'
import Row from 'components/layout/Row'
import MovieDB from '../../api/MovieDB'
import { View,Button,FlatList } from 'react-native'

const Home = () => {
  const [results, setResults] = useState('')

  // const queryClient = new QueryClient()

  // const fetchMovies = async () =>{
  //   const response = await fetch(MovieDB)
  //   return response.json()
  // }
  // if (isLoading) return 'Loading...'

  // if (error) return 'An error has occurred: ' + error.message

  // const {data, status} = useQuery('movies', fetchMovies)


  const searchApi = async () =>{
    const response = await MovieDB.get('/popular',{
      params:{
        api_key: '0ac3457a0aa995943c87e622ef7d3075',
        page:1,
        language: 'en-US'
      }
    })
    setResults(response.data.results) 
  }

  return (
    <ContainerView>

      <Typography>This is home</Typography>
      <Button title="Press" onPress={searchApi} />
      <View >
        <FlatList 
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={{paddingBottom: 50}}
          numColumns={2}
          data={results}
          keyExtractor={results => results.id}
          renderItem={({ item }) => {
            return (     
              <MovieCard data={item} />   
            )
          }}
        />
      </View>
      <Row >
       
       
      </Row>
    </ContainerView>
  )
}

export default Home
