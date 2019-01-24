import * as React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
export default class LinksScreen extends React.Component {
    render() {
        return (React.createElement(ScrollView, { style: styles.container },
            React.createElement(Text, null, "Hello there")));
    }
}
LinksScreen.navigationOptions = {
    title: 'Links',
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
});
//# sourceMappingURL=LinksScreen.js.map