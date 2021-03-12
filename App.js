import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'
import { Navigation } from './src/infrastructure/navigation/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
