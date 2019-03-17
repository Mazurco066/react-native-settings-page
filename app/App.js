import React, { Component } from "react";
import ReactNativeSettingsPage, {
  NavigateRow,
  SectionRow,
  SwitchRow,
  CheckRow,
  SliderRow
} from "react-native-settings-page";

export default class App extends Component {
  // TODO: implement your navigationOptions
  state = {
    check: false,
    switch: false,
    value: 40
  };
  _navigateToScreen = () => {
    const { navigation } = this.props;
    //navigation.navigate('Your-Screen-Name');
  };
  render() {
    return (
      <ReactNativeSettingsPage>
        <SectionRow text="Usage">
          <NavigateRow
            text="Navigate Row"
            iconName="user-circle"
            onPressCallback={this._navigateToScreen}
          />
          <SwitchRow
            text="Switch Row"
            iconName="road"
            _value={this.state.switch}
            _onValueChange={() => {
              this.setState({ switch: !this.state.switch });
            }}
          />
        </SectionRow>
        <SectionRow text="Notifications">
          <CheckRow
            text="Check Row"
            iconName="bell"
            _color="#000"
            _value={this.state.check}
            _onValueChange={() => {
              this.setState({ check: !this.state.check });
            }}
          />
          <SliderRow
            text="Slider Row"
            iconName="archive"
            _color="#000"
            _min={0}
            _max={100}
            _value={this.state.value}
            _onValueChange={value => {
              this.setState({ value });
            }}
          />
        </SectionRow>
      </ReactNativeSettingsPage>
    );
  }
}
