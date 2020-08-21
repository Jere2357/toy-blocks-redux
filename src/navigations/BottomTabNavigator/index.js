import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ThawingSpringsScreen from '../../screens/ThawingSpringsScreen';
import SecretLowlandsScreen from '../../screens/SecretLowlandsScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Thawing Spring"
                activeColor="#6cf"
                inactiveColor="#c9c9c9"
            >
                <Tab.Screen name={'Thawing Spring'} component={ThawingSpringsScreen}/>
                <Tab.Screen name={'Secret Lowlands'} component={SecretLowlandsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default BottomTabNavigator;