import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { List, Avatar } from 'react-native-paper'
import styled from 'styled-components/native'

import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import { SafeArea } from '../../../utils/safe-area.component'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'

const SettingsItem = styled(List.Item)`
  padding: ${props => props.theme.space[3]};
`

const AvatarContainer = styled.View`
  align-items: center;
`

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext)
  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          <Avatar.Icon size={180} icon='human' backgroundColor='#2182BD' />
        </TouchableOpacity>
        <Spacer side='top' size='large'>
          <Text variant='label'>{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title='Favourites'
          description='View your favourites'
          onPress={() => navigation.navigate('Favourites')}
          left={props => <List.Icon {...props} color='black' icon='heart' />}
        />
        <SettingsItem
          title='Logout'
          onPress={onLogout}
          left={props => <List.Icon {...props} color='black' icon='door' />}
        />
      </List.Section>
    </SafeArea>
  )
}