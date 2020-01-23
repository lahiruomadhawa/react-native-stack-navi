import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import S1 from './Screen1';  //S1 and S2 are symbolyc names
import S2 from './Screen2';
import S3 from './Screen3';
//https://github.com/react-navigation/react-navigation/releases/tag/v4.0.0

const App = createStackNavigator({
  S1 : {screen : S1},
  S2 : {screen : S2},
  S3 : {screen : S3},
});


export default createAppContainer(App);

