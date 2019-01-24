import * as React from 'react'
import { Item, Input } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons'

type CheckboxItemState = {focused: boolean}

type CheckboxItemT = {
  text: string,
  checked: boolean
}

type CheckboxItemProps = CheckboxItemT & {
  onChangeText: (text: string) => void,
  onCheck: () => void,
  onRemove: () => void
}

export default class CheckboxItem extends React.PureComponent<CheckboxItemProps, CheckboxItemState> {
  state = { focused: false }
  setFocus = (focus: boolean) => this.setState({focused: focus})
  setFocused = () => this.setFocus(true)
  setunFocused = () => this.setFocus(false)
  render = () => {
    const {text, checked, onChangeText, onCheck} = this.props
    return (
      <Item>
        <Icon
          onPress={onCheck}
          style={{paddingTop: 7}}
          name={checked ? 'check-box' : 'check-box-outline-blank'}
          size={25}
        />
        <Input
          onFocus={this.setFocused}
          onBlur={this.setunFocused}
          placeholder='Item text'
          value={text}
          onChangeText={onChangeText}
        />
        {
          this.state.focused ? (
            <Icon
              onPress={this.props.onRemove}
              style={{paddingTop: 7}}
              name={'remove'}
              color={'red'}
              size={25}
            />
            ) : []
        }
      </Item>
    )
  }
}
