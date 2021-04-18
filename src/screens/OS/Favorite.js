import React  from 'react'
import { Text, View,FlatList,ActivityIndicator,StyleSheet } from 'react-native'
import { useInfiniteQuery} from 'react-query'
import MovieDB from '../../api/MovieDB'
import R from 'ramda'

import MovieCard from '../../components/core/MovieCard'
import TopNavigation from 'navigation/TopNavigation'
import colors from 'styles/colors'
const { getMovies } = MovieDB()
const Todos = () => {
 

  const {  data ,isLoading, error,fetchNextPage} =   useInfiniteQuery('Movies', 
    ({ pageParam = 1 }) => getMovies( '/popular',pageParam),
    { getNextPageParam: lastPage => lastPage.page + 1 })

  
  if (isLoading) return <View  style={styles.indicator}><ActivityIndicator  size="large" color= {colors.radicalRed} /></View>

  if (error) return<Text> 'An error has occurred: ' + {error.message} </Text>

 

  var merged = R.flatten(R.pluck('results')(R.propOr([], 'pages', data)))

 
  return(
    <View>
      <TopNavigation />
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

    </View>
  )
 

}

const Favorite = () => {


 
  return (
    <View>

     
      <Todos/>
   
    </View>
  )
}

export default Favorite
const styles = StyleSheet.create({
  indicator: {
   
    justifyContent: 'center',
    alignSelf:'center',
    height:'100%',
    backgroundColor: colors.backColorLight,
    width:'100%'
   
  },
 
})