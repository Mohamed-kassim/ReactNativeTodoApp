// import { AppRegistry } from 'react-native';
// import App from './App';
//
// AppRegistry.registerComponent('ReactNativeTodoApp', () => App);
// import needed libraries
import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import Header from './app/Header'

// create the component
const sample = () => {
    return(
        <View >
        <Header/>
        <Text> Hello world </Text>
        </View>
    );
};
// styles

// render the component on the device or import it
// u must have registered component
AppRegistry.registerComponent('ReactNativeTodoApp', ()=> sample );