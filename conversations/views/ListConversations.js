import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    NativeModules
} from 'react-native';
import {
    List,
    SearchBar,
    ListItem,
    Badge,
    FormLabel, FormInput, FormValidationMessage, Card, Icon, Divider, Rating, Button
} from 'react-native-elements';

export class ListConversations extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: data
        };
    }

    showConversation(){
        console.debug(this.props);
        this.props.navigation.navigate('ChatConversation',{
        });
    }


    render(){
        return(
            <View style={{backgroundColor: '#FFFFFF'}}>
                <SearchBar round
                           clearIcon = {{ color: '#86939e', name: 'search'}}
                           onChangeText = {(text) => this.searchText(text)}
                           placeholder = 'Search Conversations'/>
                <List containerStyle={{marginBottom: 10, backgroundColor: '#FFFFFF'}}>
                    {
                        this.state.data.map((l,i) => (
                            <ListItem
                                roundAvatar
                                avatar={{uri:l.pic_url}}
                                key={i}
                                title={l.subject}
                                subtitle={
                                    <View>
                                       <Text>{' '+l.username}</Text>
                                    </View>
                                }
                                rightTitle={''+l.price}
                                hideChevron = {false}
                                onPress = {()=>this.showConversation()}
                            />
                        ))
                    }
                </List>
            </View>
        )
    }
}

const data = [
    {topic_id:'1001',username:'thedodo',subject:'Test Topic 1',status:'Pending',rating:3,price:15,pic_url:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
    {topic_id:'1002',username:'test2',subject:'Test Topic 2',status:'Accept',rating:5,price:25,pic_url:'http://scontent-lax3-1.cdninstagram.com/vp/11787a3fa9d0842f2b7015c4b82132c0/5BBE9216/t51.2885-19/s320x320/34667251_988236248005997_1991080086043885568_n.jpg'}
];