import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";
import { Lato_400Regular } from "@expo-google-fonts/lato";

import * as firebase from 'firebase'

import { theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context'
import { Navigation } from './src/infrastructure/navigation/index'

const firebaseConfig = {
  apiKey: "AIzaSyAsgIAIiuHFy4vsEjIQ_mHQJ8dZgQQcLDE",
  authDomain: "meals-to-go-jeffcad.firebaseapp.com",
  projectId: "meals-to-go-jeffcad",
  storageBucket: "meals-to-go-jeffcad.appspot.com",
  messagingSenderId: "926032245016",
  appId: "1:926032245016:web:c8345675b3b5132782ae6d"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
