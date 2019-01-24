import * as React from 'react';
import { Icon } from 'expo';
import Colors from '../constants/Colors';
export default class TabBarIcon extends React.PureComponent {
    render() {
        return (React.createElement(Icon.Ionicons, { name: this.props.name, size: 26, style: { marginBottom: -3 }, color: this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault }));
    }
}
//# sourceMappingURL=TabBarIcon.js.map