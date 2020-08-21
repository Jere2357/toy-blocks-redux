import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const screen_width = Dimensions.get('window').width;

const Header = () => {
    return(
        <View style={{ justifyContent: 'center', alignItems: 'center', width: screen_width, height: screen_width * .15, backgroundColor: 'rgba(154, 223, 220, 1)'}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Toy Blocks</Text>
        </View>
    );
}

export default Header;