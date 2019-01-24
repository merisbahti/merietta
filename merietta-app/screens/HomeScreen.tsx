import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CheckboxItem from '../components/CheckboxItem'

type CheckboxItemT = {
  text: string,
  checked: boolean
}

type HomeScreenState = { items: Array<CheckboxItemT> }
export default class HomeScreen extends React.PureComponent<{}, HomeScreenState> {
  static navigationOptions = { header: null }
  state = {
    items: [
      {text: 'färskost', checked: true},
      {text: 'dumplings', checked: false},
      {text: 'ost', checked: true},
      {text: 'deg', checked: false},
    ]
  }
  changeItemText = (index: number) => (text: string) => this.setState((state) => ({
    items: [
      ...state.items.slice(0,index),
      {...state.items[index], text: text},
      ...state.items.slice(index + 1, state.items.length)]
  }))
  checkItem = (index: number) => () => this.setState((state) => ({
    items: [
      ...state.items.slice(0,index),
      {...state.items[index], checked: !state.items[index].checked},
      ...state.items.slice(index + 1, state.items.length)]
  }))
  removeItem = (index: number) => () => this.setState(state => ({
    items: [
      ...state.items.slice(0,index),
      ...state.items.slice(index + 1, state.items.length)]
  }))
  addItem = () => this.setState(state => ({items: [...state.items, {text: '', checked: false}]}))
  render () {
    return (
      <Container style={styles.container}>
        <Content>
          {
            this.state.items.map((item, i) => (
              <CheckboxItem key={i}
                onRemove={this.removeItem(i)}
                onCheck={this.checkItem(i)}
                onChangeText={this.changeItemText(i)}
                text={item.text}
                checked={item.checked} />
            ))
          }
          <Icon
            onPress={this.addItem}
            style={{paddingTop: 7}}
            color={'green'}
            name={'add-box'}
            size={25}
          />
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
  }
})
