// Dependencies import
import React from 'react'
import { ScrollView, View } from 'react-native'
import SettingsStyle from '../Styles/SettingsStyle'

// Library main view definition
const ReactNativeSettingsPage = props => (
    <ScrollView style={ SettingsStyle.container } {...props}>
        <View style={ SettingsStyle.content }>
            {props.children}
        </View>     
    </ScrollView>
)

// Library exports
export * from  '../Components/SectionRow'
export * from '../Components/NavigateRow'
export * from '../Components/SwitchRow'
export * from '../Components/CheckRow'
export * from '../Components/SliderRow'
export default ReactNativeSettingsPage
