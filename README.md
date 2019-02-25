
# react-native-settings-page

#### Version 2.0.6

Sample Image 01         |  Sample Image 02
:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/Mazurco066/ImagesSource/master/sample1.png)  |  ![](https://raw.githubusercontent.com/Mazurco066/ImagesSource/master/sample2.png)

This is a cool Settings page based on Material Design

## Getting started

`$ npm install react-native-settings-page --save`

`$ yarn add react-native-settings-page`

### Developer

* **Gabriel Mazurco Ribeiro** - [Mazurco066](https://github.com/Mazurco066)
* **Lucas Ferraz** - [LucasFsc](https://github.com/LucasFsc)

### Props

#### types

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

_onValueChange_: use _onValueChange to implemente the switch action

```jsx
<SwitchRow 
	text='Switch Row' 
	iconName='your-icon-name'
	onPressCallback={() => { console.log('on Body Press (optional)') }}
	_value={false}
	_onValueChange={() => { console.log('switched') }} />
```

#### CheckRow exclusive types and methods

_value_: use _value to controll if the checkbox will be switched on or off

_color_: use _color to define the checkbox active color

_onValueChange_: use _onValueChange to implemente the check action

```jsx
<CheckRow 
	text='Switch Row' 
	iconName='your-icon-name'
	onPressCallback={() => { console.log('on Body Press (optional)') }}
	_color='#000'
	_value={false}
	_onValueChange={() => { console.log('checked/unchecked') }} />
```

#### SliderRow exclusive types and methods

_navigate_: use navigate to define if the slider row will show the angle-right icon

_value_: use _value to define slider's progress

_color_: use _color to define the slider active color

_min_: use _max to define slider's min progress

_max_: use _max to define slider's max progress

_onValueChange_: use _onValueChange to implemente the onValueChange action

```jsx
<SliderRow 
	navigate
	text='Slider Row' 
	iconName='your-icon-name'
	onPressCallback={() => { console.log('on Body Press (optional)') }}
	_color='#000'
	_value={70}
	_min={0}
	_max={100}
	_onValueChange={value => { console.log('value: ' + value) }} />
```

### Usage

Below is a sample usage of this package

```jsx
import React from 'react';
import ReactNativeSettingsPage, { 
	SectionRow, 
	NavigateRow,
	CheckRow
} from 'react-native-settings-page';

class Settings extends React.Component {
	// TODO: implement your navigationOptions
	state = {
		check: false,
		switch: false,
		value: 40
	}
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
						iconName='your-icon-name'
						onPressCallback={this._navigateToScreen} />
					<SwitchRow 
						text='Switch Row' 
						iconName='your-icon-name'
						_value={this.state.switch}
						_onValueChange={() => { this.setState({ switch: !this.state.switch }) }} />
					<CheckRow 
						text='Check Row'
						iconName='your-icon-name'
						_color='#000'
						_value={this.state.check}
						_onValueChange={() => { this.setState({ check: !this.state.check }) }} />
					<SliderRow 
						text='Slider Row'
						iconName='your-icon-name'
						_color='#000'
						_min={0}
						_max={100}
						_value={this.state.value}
						_onValueChange={value => { this.setState({ value }) }} />
				</SectionRow>
			</ReactNativeSettingsPage>
		)
	}
}

export default Settings
```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
  