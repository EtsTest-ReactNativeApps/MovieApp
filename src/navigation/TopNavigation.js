import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import colors from 'styles/colors'
import MovieList from 'components/core/MovieList'

const PopularTap = () =>{
  return( 
    <MovieList routeName="/popular"/>)
}
const TopRated = () =>{
  return( 
    <MovieList routeName="/top_rated"/>)
}
const UpComing = () =>{
  return( 
    <MovieList routeName="/upcoming"/>)
}
const TopNavigation = () => {

  const Tab = createMaterialTopTabNavigator()

 
  

  return (
    <Tab.Navigator 
      tabBarOptions={{ 
        activeTintColor: colors.white,
        inactiveTintColor: '#9FA5C0',
        indicatorStyle: {backgroundColor: colors.radicalRed},
        style: { backgroundColor: colors.backColor },
      }}>
      <Tab.Screen name="Popular" component={PopularTap} />
      <Tab.Screen name="Top Rated" component={TopRated} />
      <Tab.Screen name="Up Coming" component={UpComing} />
    </Tab.Navigator>
  )
}

export default TopNavigation
