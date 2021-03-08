import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native'

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ backgroundColor: 'lightgreen', padding: 16 }}>
          <Text>search</Text>
        </View>
        <View style={{ backgroundColor: 'lightsteelblue', flex: 1, padding: 16 }}>
          <Text>for</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  )
}

const styles = StyleSheet.create({

})
