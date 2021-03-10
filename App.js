import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {Text} from 'react-native'
import { ThemeProvider } from "styled-components/native";
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons}  from '@expo/vector-icons'

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme";
import {SafeArea} from './src/utils/safe-area.component'

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

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

  const createScreenOptions = ({route}) => {
    const iconName = TAB_ICON[route.name]
    return {
      tabBarIcon: ({size, color}) =>
      <Ionicons name={iconName} size={size} color={color} />
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
          screenOptions={createScreenOptions}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
          }}
        >
            <Tab.Screen name='Restaurants' component={RestaurantsScreen} />
            <Tab.Screen name='Map' component={MapScreen} />
            <Tab.Screen name='Settings' component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
