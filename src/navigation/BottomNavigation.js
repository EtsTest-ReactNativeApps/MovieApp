import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Profile from '../screens/OS/Profile'
import Favorite from '../screens/OS/Favorite'
import Home from '../screens/OS/Home'
import { StyleSheet } from 'react-native'
import colors from 'styles/colors'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeBottomNavigator = () => {
  const Tab = createBottomTabNavigator()


  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.radicalRed,
        inactiveTintColor: '#9FA5C0',
        style: styles.containerStyle,
      }}
    >
      <Tab.Screen name='Home' component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name='Favorite' component={Favorite}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}  />
      <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}  />

    </Tab.Navigator>
  )
}

export default HomeBottomNavigator

const styles = StyleSheet.create({
  containerStyle: {
 
    height: 44,
    borderTopWidth: 0,
    justifyContent: 'center', 
    backgroundColor: colors.backColor
  },
 
})