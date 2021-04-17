import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import colors from 'styles/colors'
import MovieList from 'components/core/MovieList'
import Typography from 'components/core/Typography'

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
      <Tab.Screen name="popular" component={MovieList }
        options={{
          tabBarLabel: ({ focused }) => (
            <Typography fontColor={focused ? colors.white : colors.steelgray} fontWeight={700} > Popular</Typography>
          )}}
      />
      <Tab.Screen name="top_rated" component={MovieList}
        options={{
          tabBarLabel: ({ focused }) => (
            <Typography fontColor={focused ? colors.white : colors.steelgray} fontWeight={700} > Top Rated</Typography>
          )}} />
      <Tab.Screen name="upcoming" component={MovieList}
        options={{
          tabBarLabel: ({ focused }) => (
            <Typography fontColor={focused ? colors.white : colors.steelgray} fontWeight={700} > Upcoming</Typography>
          )}} />
    </Tab.Navigator>
  )
}

export default TopNavigation
