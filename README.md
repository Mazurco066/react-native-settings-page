
# react-native-settings-page

This is a cool Settings page based on Material Design

## Getting started

`$ npm install react-native-settings-page --save`
`$ yarn add react-native-settings-page`

## Developer

* **Gabriel Mazurco Ribeiro (Mazurco066)**

## Props

### type

_text_: use the text prop to display in Row
_iconName_: use the icon name to display a icon on the row, the source from icons is **FontAwesome**

#### NavigateRow exclusive types and methods

_onPressCallback_: use this to implement your onPress method

```jsx
<NavigateRow
  text='Navigate Row'
  iconName={'your-icon-name'}
	onPressCallback={() => { console.log('onPress') }} />
```

#### SwitchRow exclusive types and methods

_value_: use _value to controll if the switch will be switched on or off

```jsx
<SwitchRow 
	text='Switch Row' 
	iconName='your-icon-name'
	_value={false} />
```

## Usage

Below is a sample usage of this pakage

```jsx
import React from 'react';
import ReactNativeSettingsPage, { 
	SectionRow, 
	NavigateRow 
} from 'react-native-settings-page';

class Settings extends React.Component {
	// TODO: iplement your navigationOptions
	_navigateToScreen = () {
		const { navigation } = this.props
		navigation.navigate('Your-Screen-Name');
	}
	render() {
		return (
			<ReactNativeSettingsPage>

				<SectionRow text='Usage'>

          <NavigateRow
            text='Navigate Row'
            iconName={'your-icon-name'}
						 onPressCallback={this._navigateToScreen} />
						 
					<SwitchRow 
						text='Switch Row' 
						iconName='your-icon-name'
						_value={false} />

				</SectionRow>
				
			</ReactNativeSettingsPage>
		)
	}
}

export default Settings
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
  