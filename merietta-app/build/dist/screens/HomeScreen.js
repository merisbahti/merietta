import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
export default class HomeScreen extends React.Component {
    constructor() {
        super(...arguments);
        this._handleLearnMorePress = () => {
            WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
        };
        this._handleHelpPress = () => {
            WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes');
        };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(ScrollView, { style: styles.container, contentContainerStyle: styles.contentContainer },
                React.createElement(View, { style: styles.welcomeContainer },
                    React.createElement(Image, { source: __DEV__
                            ? require('../assets/images/robot-dev.png')
                            : require('../assets/images/robot-prod.png'), style: styles.welcomeImage })),
                React.createElement(View, { style: styles.getStartedContainer },
                    this._maybeRenderDevelopmentModeWarning(),
                    React.createElement(Text, { style: styles.getStartedText }, "Get started by opening!"),
                    React.createElement(View, { style: [styles.codeHighlightContainer, styles.homeScreenFilename] },
                        React.createElement(MonoText, { style: styles.codeHighlightText }, "screens/HomeScreen.js")),
                    React.createElement(Text, { style: styles.getStartedText }, "Change this text and your app will automatically reload.")),
                React.createElement(View, { style: styles.helpContainer },
                    React.createElement(TouchableOpacity, { onPress: this._handleHelpPress, style: styles.helpLink },
                        React.createElement(Text, { style: styles.helpLinkText }, "Help, it didn\u2019t automatically reload!")))),
            React.createElement(View, { style: styles.tabBarInfoContainer },
                React.createElement(Text, { style: styles.tabBarInfoText }, "This is a tab bar. You can edit it in:"),
                React.createElement(View, { style: [styles.codeHighlightContainer, styles.navigationFilename] },
                    React.createElement(MonoText, { style: styles.codeHighlightText }, "navigation/MainTabNavigator.js")))));
    }
    _maybeRenderDevelopmentModeWarning() {
        if (__DEV__) {
            const learnMoreButton = (React.createElement(Text, { onPress: this._handleLearnMorePress, style: styles.helpLinkText }, "Learn more"));
            return (React.createElement(Text, { style: styles.developmentModeText },
                "Development mode is enabled, your app will be slower but you can use useful development tools. ",
                learnMoreButton));
        }
        else {
            return (React.createElement(Text, { style: styles.developmentModeText }, "You are not in development mode, your app will run at full speed."));
        }
    }
}
HomeScreen.navigationOptions = {
    header: null,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
    // position: 'absolute',
    // width: 50,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: 'black',
    //     shadowOffset: { height: -3 },
    //     shadowOpacity: 0.1,
    //     shadowRadius: 3,
    //   },
    //   android: {
    //     elevation: 20,
    //   },
    // }),
    // // alignItems: 'center',
    // backgroundColor: '#fbfbfb',
    // // paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },
});
//# sourceMappingURL=HomeScreen.js.map