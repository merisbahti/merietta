import * as React from 'react'
import { Text } from 'react-native'

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  }

  render () {
    return <Text>Settings screen</Text>
  }
}
