import React, { useContext } from 'react'
import { List } from 'react-native-paper'
import styled from 'styled-components/native'

import { SafeArea } from '../../../utils/safe-area.component'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'

export const SettingsScreen = ({ navigation }) => {
  const { onLogout } = useContext(AuthenticationContext)
  return (
    <SafeArea>
      <List.Section>
        <List.Item
          style={{ padding: 16 }}
          title='Favourites'
          description='View your favourites'
          onPress={() => navigation.navigate('Favourites')}
          left={props => <List.Icon {...props} color='black' icon='heart' />}
        />
        <List.Item
          style={{ padding: 16 }}
          title='Logout'
          onPress={onLogout}
          left={props => <List.Icon {...props} color='black' icon='door' />}
        />
      </List.Section>
    </SafeArea>
  )
}