import React,{useState} from 'react'
import { useInfiniteQuery, useQuery } from 'react-query'
import ContainerView from '../../components/layout/ContainerView'
import Typography from '../../components/core/Typography'
import MovieCard from 'components/core/MovieCard'
import Row from 'components/layout/Row'
import R from 'ramda'
import MovieDB from '../../api/MovieDB'
import { View,Text,FlatList } from 'react-native'



const Home = () => {

  const { getMovies } = MovieDB()
  
  const {  data ,isLoading, error,fetchNextPage} =   useInfiniteQuery('Movies', 
    ({ pageParam = 1 }) => getMovies( '/popular',pageParam),
    { getNextPageParam: lastPage => lastPage.page + 1 })

  var merged = R.flatten(R.pluck('results')(R.propOr([], 'pages', data)))

  if (isLoading) return <Text>Loading...</Text>

  if (error) return<Text> 'An error has occurred: ' + {error.message} </Text>

 
  return (
    <ContainerView>

      <Typography>This is home</Typography>
      
      <View >
        <FlatList 
          columnWrapperStyle={{justifyContent: 'space-between'}}
          contentContainerStyle={{paddingBottom: 50}}
          onEndReached={() => fetchNextPage()}
          numColumns={2}
          data={merged}
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
