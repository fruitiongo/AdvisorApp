import React, { Component } from 'react';
import {
    FlatList,
    View,
    ScrollView,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    NativeModules, StyleSheet
} from 'react-native';
import {
    List,
    SearchBar,
    ListItem,
    Badge,
    Header,
    Avatar,
    FormLabel, FormInput, FormValidationMessage, Card, Icon, Divider, Rating, Button
} from 'react-native-elements';

export class ChatConversation extends Component {
    constructor(props) {
        super(props);
        /*this.props.navigationOptions = {
            header: ( /!* Your custom header *!/
                <View
                    style={{
                        height: 80,
                        marginTop: 20 /!* only for IOS to give StatusBar Space *!/
                    }}
                >
                    <Text>This is CustomHeader</Text>
                </View>
            ),
            headerStyle: {
                backgroundColor: "transparent"
            }
        };*/
        this.state = {
            data: data
        }
    }

    static navigationOptions = (navigation) => {
        return (
            {
                title: 'Test Topic 1',
                headerTitleStyle: {
                    fontWeight: "bold",
                    color: "#000",
                    zIndex: 1,
                    fontSize: 18,
                    lineHeight: 23,
                    fontFamily: "CircularStd-Bold",
                    textAlign: "center"
                }
            })
    }

    getContentJustify(i) {
        if (((i + 1) % 2) == 0) {
            return 'flex-end';
        } else {
            return 'flex-start';
        }
    }

    getContainerStyle(i) {
        if (((i + 1) % 2) == 0) {
            return styles.leftContainer
        }
        else
            return styles.rightContainer
    }

        getViewContent(l, i)
        {
            if (((i + 1) % 2) == 0) {
                return ([<Avatar
                    small
                    rounded
                    source={{uri: l.pic_url}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                />,
                    <Card>
                        <Text>{l.message}</Text></Card>]);
            } else {
                return ([<Card containerStyle={{backgroundColor: '#20d9cc', paddingTop: 20, marginTop: 20}}>
                    <Text style={{color: '#fff', fontSize: 20}}>{l.message}</Text></Card>,
                    <Avatar
                        small
                        rounded
                        source={{uri: l.pic_url}}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        align={"center"}
                    />]);
            }
        }

        render()
        {

            return (
                <ScrollView>
                    {
                        this.state.data.map((l, i) => (
                                <Card containerStyle={this.getContainerStyle(i)}>
                                    {
                                        //this.getViewContent(l,i)
                                        <View key={i} style={{flexDirection: 'row', margin: 10}}>
                                            <Image
                                                source={{uri: l.pic_url}}
                                                style={{width: 30, height: 30}}
                                            />
                                            <Text>{l.message}</Text>
                                        </View>
                                    }
                                </Card>
                            )
                        )
                    }
                </ScrollView>
            )
        }
    }

    const
    data = [
        {
            messageID: 1002,
            messageType: 'text',
            message: 'This is a test message',
            pic_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
        },
        {
            messageID: 1003,
            messageType: 'text',
            message: 'This is a test message 2',
            pic_url: 'http://scontent-lax3-1.cdninstagram.com/vp/11787a3fa9d0842f2b7015c4b82132c0/5BBE9216/t51.2885-19/s320x320/34667251_988236248005997_1991080086043885568_n.jpg'
        }
    ]

const styles = StyleSheet.create({
    leftContainer: {
        flex: 1, flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 10, paddingRight: 100
    },
    rightContainer: {
        flex: 1, flexDirection: 'row', justifyContent: 'flex-end', paddingTop: 10, paddingLeft: 100
    }
});
