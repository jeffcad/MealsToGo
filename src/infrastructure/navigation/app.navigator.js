import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import { SafeArea } from '../../utils/safe-area.component'
import { RestaurantsNavigator } from './restaurants.navigator'

const MapScreen = () => {
  return <SafeArea><Text>Map Screen</Text></SafeArea>
}

const SettingsScreen = () => {
  return <SafeArea><Text>Settings Screen</Text></SafeArea>
}

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings'
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) =>
      <Ionicons name={iconName} size={size} color={color} />
  }
}

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={createScreenOptions}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name='Restaurants' component={RestaurantsNavigator} />
        <Tab.Screen name='Map' component={MapScreen} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}