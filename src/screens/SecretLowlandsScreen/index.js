import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { fetchLowlands } from '../../redux-store/actions';
import Lists from '../../components/Lists';

class SecretLowlandsScreen extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.fetchLowlands()
    }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', fontSize: 24, marginTop: 20}}>This is secret lowlands screen</Text>
                <Lists data={this.props.lowlands}/>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    lowlands: state.lowland.lowlands
})

export default connect(mapStateToProps, {fetchLowlands})(SecretLowlandsScreen);