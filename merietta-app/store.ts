import { Container } from 'unstated'
const io = require('socket.io-client')

export type Todo = {
  text: string,
  checked: boolean
}
type AppStore = {
  todos: Array<Todo>,
  status: Status
}
type Status = 'connecting' | 'connected' | 'disconnected'

export default class AppContainer extends Container<AppStore> {
  state = {
    todos: [],
    status: 'connecting' as Status
  }
  socket?: SocketIOClient.Socket = io('ws://merietta-api-2.herokuapp.com')
  newTodo = () => {
    const action = { type: 'add-todo' }
    if (this.socket) {
      this.socket.emit('action', JSON.stringify(action))
    }
  }
  renameTodo = (name: string, index: number) => {
    const action = { type: 'rename-todo', payload: {name, index} }
    if (this.socket) {
      this.socket.emit('action', JSON.stringify(action))
    }
  }
  removeTodo = (index: number) => {
    const action = { type: 'remove-todo', payload: {index} }
    if (this.socket) {
      this.socket.emit('action', JSON.stringify(action))
    }
  }
  checkTodo = (index: number) => {
    const action = { type: 'check-todo', payload: {index} }
    if (this.socket) {
      this.socket.emit('action', JSON.stringify(action))
    }
  }
  constructor () {
    super()
    console.log('starting stuff')
    if (this.socket) {
      this.socket.on('connect', () => {
        console.log('client: connect')
        this.setState(_state => ({status: 'connected'}))
      })
      this.socket.on('disconnect', () => {
        console.log('client: disconnect')
        this.setState(_state => ({status: 'disconnected'}))
      })
      this.socket.on('state', (message: any) => {
        const todos: {todos: Array<Todo>} = JSON.parse(message)
        console.log('got todos', todos.todos)
        this.setState(_state => ({todos: todos.todos}))
      })
    }
  }
}
