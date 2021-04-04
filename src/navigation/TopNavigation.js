import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const TopNavigation = () => {

  const Tab = createMaterialTopTabNavigator()

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  )
}

export default TopNavigation
