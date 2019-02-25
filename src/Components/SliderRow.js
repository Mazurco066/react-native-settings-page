// Dependencies import
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Slider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import SettingsRowStyle from '../Styles/SettingsRowStyle'

// Styles deconstructing
const {
    containerInSection,
    containerInnerSection,
    sliderSt,
    iconLeft,
    iconRight,
    text
} = SettingsRowStyle

// Class for slider rows
class SliderRow extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPressCallback}>
                <View style={containerInSection}>
                    <View style={containerInnerSection}>
                        <Icon name={this.props.iconName} size={24} style={iconLeft} />
                        <Text style={text} numberOfLines={1} ellipsizeMode={'tail'}>
                            {this.props.text}
                        </Text> 
                        {
                            this.props.navigate
                                ? <Icon name={'angle-right'} size={24} style={iconRight} />
                                : null
                        }                   
                    </View>
                </View>
                <Slider 
                    style={sliderSt} 
                    thumbTintColor={this.props._color}
                    maximumValue={this.props._max}
                    minimumValue={this.props._min}
                    value={this.props._value} 
                    onValueChange={this.props._onValueChange} />
            </TouchableOpacity>
        )
    }
}

// Component export
export { SliderRow }