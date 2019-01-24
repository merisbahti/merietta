import * as React from 'react'
import { Text, TextProps } from 'react-native'

export class MonoText extends React.PureComponent<TextProps> {
  render () {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />
  }
}
