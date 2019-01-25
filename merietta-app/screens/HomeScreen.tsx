import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Text, Container, Content } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'
import CheckboxItem from '../components/CheckboxItem'
import AppStore, { Todo } from '../store'
import { Subscribe } from 'unstated'

type HomeScreenState = { }
export default class HomeScreen extends React.PureComponent<{}, HomeScreenState> {
  static navigationOptions = { header: null }
  render () {
    return (
      <Container style={styles.container}>
        <Subscribe to={[AppStore]}>
          {
            (store: AppStore) => (
              <Content>
                <Text>{store.state.status}</Text>
                {
                  store.state.todos.map((item: Todo, i) => (
                    <CheckboxItem key={i}
                    onRemove={() => store.removeTodo(i)}
                    onCheck={() => store.checkTodo(i)}
                    onChangeText={(name: string) => store.renameTodo(name, i)}
                    text={item.name}
                    checked={item.checked} />
                  ))
                }
                <Icon
                onPress={store.newTodo}
                  style={{ paddingTop: 7 }}
                  color={'green'}
                  name={'add-box'}
                  size={25}
                />
              </Content>
        )
          }
        </Subscribe>
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
