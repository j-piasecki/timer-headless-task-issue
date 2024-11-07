/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  SafeAreaView,
  AppRegistry,
  NativeModules,
  Button,
} from 'react-native';

AppRegistry.registerHeadlessTask('SomeTaskName', () =>
  require('./SomeTaskName.js'),
);

function App() {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Start service" onPress={() => {
        NativeModules.ServiceModule.start();
      }} />

      <Button title="SetTimeout" onPress={() => {
        setTimeout(() => {
          console.log('setTimeout');
        }, 1000);
      }} />
    </SafeAreaView>
  );
}


export default App;
