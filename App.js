/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
    Button,
  View,
    AppRegistry
} from 'react-native';
import {
    createStackNavigator
} from 'react-navigation';

import {ListInfluencers} from "./conversations/views/ListInfluencers";
import {Conversation} from "./conversations/views/Conversation";
import {ListConversations} from "./conversations/views/ListConversations";
import {ChatConversation} from "./conversations/views/ChatConversation";

const instructions = Platform.select({
  ios: 'ADVISOR APP Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'ADVISOR APP ANDROID Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

/*const NavConfig = {
  navigation : {
    Influencers: {
      screen: ListInfluencers
    },
      Conversation: {
      screen: Conversation
      }
  }
}

export const AppNavigator = StackNavigator(NavConfig.navigation);
AppRegistry.registerComponent('AdvisorApp', () => AppNavigator)*/

/*export default class App extends Component {

  constructor(props){
    const Props = props;
    super(props);
  }
  render() {
      const {nav} = Props.navigation;
    return (
        <View>
          <Button
              onPress={() => nav("Influencers")}
          title={"Start"}>Start</Button>
        </View>
    );
  }
}*/

const App = props => {
    //const { navigate } = props.navigation;
    return <MyNavigator/>;
    /*return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to React Native Navigation Sample!
            </Text>
            <Button
                onPress={() => navigate("ListInfluencers")}
                title="Go to Second Screen"
            />
        </View>
    );*/
};

export default App;

const MyNavigator = createStackNavigator(
    {
        Influencers: ListInfluencers,
        Conversation: Conversation,
        Conversations: ListConversations,
        ChatConversation: {
            screen: ChatConversation/*,
            navigationOptions: {
                header: null,
                headerStyle: {
                    backgroundColor: "transparent"
                }
            }*/
        }
    },
    {

    }
)

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
