import MovieDB from 'api/MovieDB'
import Container from 'components/layout/ContainerView'
import React from 'react'
import { View,Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import MovieCard from './MovieCard'
import { useInfiniteQuery } from 'react-query'
import R from 'ramda'

const MovieList = ({navigation,route}) => {

  const { getMovies } = MovieDB()
  
  const routeName= route.name
  
  const {  data ,isLoading, error,fetchNextPage} =   useInfiniteQuery(['Movies',routeName], 
    ({ pageParam = 1 }) => getMovies( routeName,pageParam),
    { getNextPageParam: lastPage => lastPage.page + 1 })


  var merged = R.flatten(R.pluck('results')(R.propOr([], 'pages', data)))

  if (isLoading) return <Text>Loading...</Text>

  if (error) return<Text> 'An error has occurred: ' + {error.message} </Text>

  return (
    <Container>
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
            
              <MovieCard navigation={navigation} data={item} />   
             
            )
          }}
        />
      </View>
    </Container>
  )
}

export default MovieList
