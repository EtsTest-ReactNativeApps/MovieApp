// import MovieDB from 'api/MovieDB'
import React, { useState } from 'react'
import { Text, View,FlatList, Button } from 'react-native'
import { useInfiniteQuery, useQuery } from 'react-query'
import MovieDB from '../../api/MovieDB'
import R from 'ramda'

import MovieCard from '../../components/core/MovieCard'
const { getMovies } = MovieDB()
const Todos = () => {
 

  const {  data ,isLoading, error,fetchNextPage} =   useInfiniteQuery('Movies', 
    ({ pageParam = 1 }) => getMovies( '/popular',pageParam),
    { getNextPageParam: lastPage => lastPage.page + 1 })

  // const {  data: MoiveData ,isLoading, error} =   useQuery('Movies', () => fetchMovies())

  
  if (isLoading) return <Text>Loading...</Text>

  if (error) return<Text> 'An error has occurred: ' + {error.message} </Text>

 

  var merged = R.flatten(R.pluck('results')(R.propOr([], 'pages', data)))

  console.log(merged)
  return(
    <View>
      {/* <Button title={'1'} onPress={()=> setPage(2)}   /> */}
      <FlatList 
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{paddingBottom: 50}}
        numColumns={2}
        onEndReached={() => fetchNextPage()}
        data={merged}
        keyExtractor={results => results.id}
        renderItem={({ item }) => {
          return (  
            
            <MovieCard data={item} />   
          )
        }}
      />
      {/*      
      <Button title={'2'} />
      <Button title={'3'}  /> */}
      
    </View>
  )
 

}

const Favorite = () => {

  // const info = useQuery('todos', fetchTodoList)

  // const { isLoading, error, data } = useQuery('repoData', () =>
  //   fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
  //     res.json()
  //   )
  // )
  // if (isLoading) return <Text>Loading...</Text>

  // if (error) return<Text> 'An error has occurred: '</Text> + error.message

 
  return (
    <View>
      {/* <Text>
        {data.id}
      </Text> */}
     
      <Todos/>
     
      {/* <FlatList 
        
        data={data}
     
        renderItem={({ item }) => {
          return (     
            <Text>{item.config}</Text>
          )
        }}
      /> */}
    </View>
  )
}

export default Favorite
