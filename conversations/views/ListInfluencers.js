import React, { Component } from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
    Navigator, AppRegistry
} from 'react-native';
import {
    SearchBar,
    List,
    ListItem,
    Rating
} from 'react-native-elements';


/*import {InfluencerListView} from "./InfluencerListView";
import {Conversation} from "./Conversation";
import {StackNavigator} from "react-navigation";*/

//type Props = { navigation: Function }
/*const NavConfig = {
    navigation : {
        Conversation: {
            screen: Conversation
        }
    }
}

export const AppNavigator = StackNavigator(NavConfig.navigation);
AppRegistry.registerComponent('AdvisorApp', () => AppNavigator)*/

export class ListInfluencers extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: data
        }
    }
    searchText(text){
        const newData = data.filter((dataItem) => {
            return dataItem.username.toLowerCase().match(text);
        });
        this.setState({
            data: newData
        })
    }
    getRatingImageSource(rating){
        switch (rating){
            case 1:
                return require('../../images/1starrating.png')
            case 2:
                return require('../../images/2starrating.png')
            case 3:
                return require('../../images/3starrating.png')
            case 4:
                return require('../../images/4starrating.png')
            case 5:
                return require('../../images/5starrating.png')
        }
    }

    showConversation(listItem){
        console.debug(this.props);
        this.props.navigation.navigate('Conversation',{
            influencer: listItem
        });
    }

    static navigationOptions = {
        headerTitle: 'First screen'
    };

render() {
    return(
        <View style={{backgroundColor: '#FFFFFF'}}>
            <SearchBar round
                       clearIcon = {{ color: '#86939e', name: 'search'}}
                       onChangeText = {(text) => this.searchText(text)}
                       placeholder = 'Search for Influencers'/>
            {/*<FlatList
            data={[
                {key:'1001',username:'test1',rating:3,price:15},
                {key:'1002',username:'test2',rating:5,price:25}
            ]}
            renderItem={({item}) => <InfluencerListView
            username={item.username} price={item.price}></InfluencerListView>}>
            </FlatList>*/}
            <List containerStyle={{marginBottom: 10, backgroundColor: '#FFFFFF'}}>
                {
                    this.state.data.map((l,i) => (
                        <ListItem
                            roundAvatar
                            avatar={{uri:l.pic_url}}
                            key={i}
                            title={l.username}
                            subtitle={
                                <View>
                                    <Text>300 posts 20,302 followers 3,499 following</Text>
                                    <Rating readonly startingValue={l.rating} showReadOnlyText={false}
                                            imageSize={15}/>
                                </View>
                            }
                            rightTitle={''+l.price}
                            hideChevron = {true}
                            onPress={() => this.showConversation(l)}
                        />
                    ))
                }
            </List>
        </View>
    )
}
}

const data = [
        {influencer_id:'1001',username:'thedodo',rating:3,price:15,pic_url:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'},
{influencer_id:'1002',username:'test2',rating:5,price:25,pic_url:'http://scontent-lax3-1.cdninstagram.com/vp/11787a3fa9d0842f2b7015c4b82132c0/5BBE9216/t51.2885-19/s320x320/34667251_988236248005997_1991080086043885568_n.jpg'}
];