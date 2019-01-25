import { createStore } from 'redux'

type Todo = { name: string, checked: boolean }
type State = { todos: Array<Todo> }
type AddTodo = { type: 'add-todo', payload: { }  }
type RemoveTodo = { type: 'remove-todo', payload: { index: number } }
type CheckTodo = { type: 'check-todo', payload: { index: number } }
type RenameTodo = { type: 'rename-todo', payload: { name: string, index: number } }
type Actions = AddTodo | RemoveTodo | CheckTodo | RenameTodo

const initialState = { todos: [] }

const modifyItem = <T extends any>(a: Array<T>, f: (item: T) => T, i: number) => ([
  ...a.slice(0, i),
  f(a[i]),
  ...a.slice(i + 1, a.length)
])

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case 'add-todo': return {
      ...state,
      todos: [ ...state.todos, { name: '', checked: false }]
    }
    case 'remove-todo': return {
      ...state,
      todos: [
        ...state.todos.slice(0, action.payload.index),
        ...state.todos.slice(action.payload.index + 1, state.todos.length)
      ]
    }
    case 'rename-todo': return {
      ...state,
      todos: modifyItem(
        state.todos,
        (todo) => ({...todo, name: action.payload.name}),
        action.payload.index
      )
    }
    case 'check-todo': return {
      ...state,
      todos: modifyItem(
        state.todos,
        (todo) => ({
          ...todo,
          checked: !state.todos[action.payload.index].checked
        }),
        action.payload.index
      )
    }
    default: return state
  }
}

export default createStore(reducer)
