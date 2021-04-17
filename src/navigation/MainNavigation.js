import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  BottomNavigator  from '../navigation/BottomNavigation'
import MovieDetails from 'components/core/MovieDetails'



export default function MainNavigation  ()  {

  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Navigator' component={BottomNavigator} />
        <Stack.Screen name='Movie Details' component={MovieDetails} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}


