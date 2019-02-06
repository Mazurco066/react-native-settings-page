// Dependencies import
import { 
    AppRegistry,
    NativeModules 
} from 'react-native'

// Components import
import ReactNativeSettingsPage, {
    SectionRow,
    NavigateRow,
    SwitchRow,
    CheckRow
} from './src/Pages/ReactNativeSettingsPage'

// Lib recover
const { RNSettingsPage } = NativeModules

// Lib export
export default RNSettingsPage

// Lib component register
AppRegistry.registerComponent('ReactNativeSettingsPage', () => ReactNativeSettingsPage)
AppRegistry.registerComponent('SectionRow', () => SectionRow)
AppRegistry.registerComponent('NavigateRow', () => NavigateRow)
AppRegistry.registerComponent('SwitchRow', () => SwitchRow)
AppRegistry.registerComponent('CheckRow', () => CheckRow)
