import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

const CardItem = ({itemText}) => {

    const [toolTipVisible, setToolTipVisible] = useState(false);

    return(
        <View style={{ marginVertical: 10, alignItems: 'center', justifyContent: 'center', width: 300, height: 100, backgroundColor: '#6cf', borderWidth: 2, borderColor: 'black', borderRadius: 7}}>
            <Tooltip
                animated={true} //(Optional) When true, tooltip will animate in/out when showing/hiding
                arrowSize={{ width: 16, height: 8 }} //(Optional) Dimensions of arrow bubble pointing to the highlighted element
                backgroundColor="rgba(0,0,0,0)" //(Optional) Color of the fullscreen background beneath the tooltip.
                isVisible={toolTipVisible} //(Must) When true, tooltip is displayed
                content={<Text style={{flex: 1, color: '#fff'}}>{'Hello Users! \nthis is ' + itemText}</Text>} //(Must) This is the view displayed in the tooltip
                placement="top"  //(Must) top, bottom, left, right, auto.
                onClose={() => setToolTipVisible(false)} //(Optional) Callback fired when the user taps the tooltip
                contentStyle = {{backgroundColor: 'black'}}
            >
                <TouchableWithoutFeedback onLongPress={() => setToolTipVisible(true)}>
                    <Text style={{fontSize: 18, fontWeight: 'bold' }}>{itemText}</Text>
                </TouchableWithoutFeedback>
            </Tooltip>
        </View>
    )
}

export default CardItem;