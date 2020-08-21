import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchThawing } from '../../redux-store/actions';
import Lists from '../../components/Lists';

class ThawingSpringsScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            blocks: []
        }
    }

    componentDidMount(){
        this.props.fetchThawing().then(() => {
            this.setState({
                blocks: this.props.blocks
            })
        });
        console.log('all thawing : ', this.props.blocks);
    }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{alignSelf: 'center', fontSize: 24, marginTop: 20}}>This is thawing springs screen</Text>
                <Lists data={this.props.blocks}/>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    blocks: state.thawing.blocks
});

export default connect(mapStateToProps, {fetchThawing})(ThawingSpringsScreen);