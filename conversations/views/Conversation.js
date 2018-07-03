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
    ListItem,
    FormLabel, FormInput, FormValidationMessage, Card, Icon, Divider, Rating, Button
} from 'react-native-elements';

var ImagePicker = NativeModules.ImageCropPicker;

export class Conversation extends Component{
    constructor(props){
        super(props);
        this.state = {imgSrc: null};
        this.state.imagesKey = 1;
        this.state.renderKey = 2;
        this.state.selectedImages = [];
        this.state.renderImages = [];
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

    getImagesFromLibrary(){
        setTimeout(()=> {
            ImagePicker.openPicker({
                multiple: true,
                includeBase64: true
            }).then(images => {
                this.renderImages(images);
                this.setState({isOpen: false});
            });
            /*var ImagePicker = require('react-native-image-picker');
            ImagePicker.launchImageLibrary({}, (response)  => {
                // Same code as in above section!
                this.setState({imgSrc: 'data:image/jpeg;base64,'+response.data});
            });*/
        });
    }

    renderImages(images){
        imagesKey = this.state.imagesKey;
        selectedImages = this.state.selectedImages;
        renderImages = this.state.renderImages;
        images.map((prop,key) => {
            imagesKey = imagesKey + 1;
            selectedImages.push(prop);
            let renderImage =
                (
                    <Image
                        style={{
                            width: 102,
                            height: 102,
                            resizeMode: Image.resizeMode.contain,
                        }}
                        source={{uri: 'data:image/jpeg;base64,' + prop.data}}/>
                );
            renderImages.push(renderImage);
        })
        this.setState({selectedImages: selectedImages, key: this.state.imagesKey});
        this.setState({renderImages: renderImages, key: this.state.renderKey});
        alert(images[0].data);
    }


    showConversations(){
        console.debug(this.props);
        this.props.navigation.navigate('Conversations',{
        });
    }


    render(){
        const influencer = this.props.navigation.getParam('influencer');
        return(
            <Card style={{backgroundColor: '#FFFFFF', height: '100%', padding:0}}>
               {/*<List containerStyle={{marginTop: 0, height: 100, backgroundColor: '#FFFFFF'}}>*/}
                            <ListItem
                                roundAvatar
                                avatar={{uri:influencer.pic_url}}
                                key={'influencer'}
                                title={this.props.navigation.getParam('influencer').username}
                                subtitle={
                                    <Rating readonly startingValue={influencer.rating} showReadOnlyText={false}
                                            imageSize={10}/>
                                }
                                rightTitle={'$'+influencer.price}
                                hideChevron = {true}
                                rightTitleNumberOfLines = {2}
                            />

                {/*</List>*/}
                <Divider/>
                <FormLabel>Subject</FormLabel>
                <FormInput/>
                <FormValidationMessage></FormValidationMessage>
                <Divider/>
                <FormLabel>Description</FormLabel>
                <FormInput multiline={true} dataDetectorTypes={'all'}/>
                <FormValidationMessage></FormValidationMessage>
                <Divider/>
                <View style={{flexDirection: 'row'}}>
                    {this.state.renderImages}
                </View>
                <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                <TouchableOpacity
                    style={{
                        borderWidth:1,
                        /*flex: 1,*/
                        alignSelf:'flex-start',
                        borderColor:'rgba(0,0,0,0.2)',
                        alignItems:'center',
                        justifyContent:'center',
                        width:50,
                        height:50,
                        backgroundColor:'#01a699',
                        borderRadius:50,
                    }}
                >
                    <Icon type={"Feather"} name="camera"  size={30} color="#fff" onPress={()=>this.getImagesFromLibrary()} />
                </TouchableOpacity>
                    <Button
                        buttonStyle={{
                            backgroundColor: "#01a699",
                            borderColor: "transparent",
                            borderWidth: 0,
                            borderRadius: 5
                        }}
                        title='GET QUOTE'
                        onPress={()=>this.showConversations()}
                    />
                </View>
            </Card>
            );
    }
}