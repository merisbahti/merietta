import * as React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <Text>Hello there</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
})
