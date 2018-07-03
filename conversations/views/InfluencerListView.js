import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export class InfluencerListView extends Component{
    render() {
        return(<View style={styles.view}>
            <Text style={styles.text}>{this.props.username}</Text>
            <Text style={styles.priceText}>${this.props.price}</Text>
        </View>);
    }
}

const styles = StyleSheet.create(
    {
        text:{
            textAlign : 'left'
        },
        priceText: {
            textAlign:'right'
        },
        view: {
            flex: 1,
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF'
        }
    }
)