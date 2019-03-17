// Dependencies import
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import SettingsRowStyle from '../Styles/SettingsRowStyle'

// Styles deconstructing
const {
    container,
    containerSection,
    textSection,
} = SettingsRowStyle

// Class for section rows
class SectionRow extends Component {
    render() {
        return (
            <View style={container}>
                <View style={containerSection}>
                    <Text style={textSection} numberOfLines={1} ellipsizeMode={'tail'}>
                        {this.props.text}
                    </Text>
                </View>
                <View>{this.props.children}</View>
            </View>
        )
    }
}

// Component export
export { SectionRow }