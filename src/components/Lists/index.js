import React, { useState } from 'react';
import { SafeAreaView, FlatList, Text, TouchableHighlight } from 'react-native';
import CardItem from '../CardItem';

const Lists = ({data}) => {
    return(
        <SafeAreaView style={{flex: 1, marginTop: 30, backgroundColor: '#c9c9c9', alignItems: 'center', justifyContent: 'center'}}>
            <FlatList
                data={data}
                renderItem={({ item }) => <CardItem itemText={item.attributes.data}/>}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    )
};

export default Lists;