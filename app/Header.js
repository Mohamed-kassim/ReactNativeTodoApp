import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//Create component
export default class Header extends Component {
    render() {
        return (
            <View style={ styles.header}>
            <Text style={ styles.text}>Todo App</Text>
            </View>
        );
    }


}
const styles = StyleSheet.create({
    header :{
        backgroundColor : '#fff6dd',
        height : 60,
        alignItems : 'center',
        justifyContent:'center',

    },
    text : {
        fontSize : 20,
        fontWeight: 'bold'
    }

});
