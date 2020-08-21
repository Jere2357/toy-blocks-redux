import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import BottomTabNavigator from '../../navigations/BottomTabNavigator';

const screen_height = Dimensions.get('window').height;

class MainScreen extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{
                paddingBottom: 10, 
                justifyContent:'flex-end', 
                height: screen_height * .85
            }}>
                <BottomTabNavigator/>
            </View>
        );
    }
};

export default MainScreen;