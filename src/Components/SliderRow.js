// Dependencies import
import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import SettingsRowStyle from '../Styles/SettingsRowStyle'

// Styles deconstructing
const {
    containerInSection,
    containerInnerSection,
    checkSt,
    iconLeft,
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
                        <CheckBox
                            style={checkSt} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

// Component export
export { SliderRow }