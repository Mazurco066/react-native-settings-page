
# react-native-settings-page

## Getting started

`$ npm install react-native-settings-page --save`

### Mostly automatic installation

`$ react-native link react-native-settings-page`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-settings-page` and add `RNSettingsPage.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSettingsPage.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import io.github.mazurco066.RNSettingsPagePackage;` to the imports at the top of the file
  - Add `new RNSettingsPagePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-settings-page'
  	project(':react-native-settings-page').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-settings-page/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-settings-page')
  	```


## Usage
```javascript
import RNSettingsPage from 'react-native-settings-page';

// TODO: What to do with the module?
RNSettingsPage;
```
  