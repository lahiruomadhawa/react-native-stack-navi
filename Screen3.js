import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

//for bottom tabs only
import {createAppContainer, createBottomTabNavigator} from 'react-navigation';

export default class Screen3 extends Component{  

    static navigationOptions = {
        title: 'Profile',
      };

    show = () =>{
        this.props.navigation.navigate('S1');
    }

    render(){
        return(
            <View>
                <Text style={{textAlign:"center", fontSize:20}}>Screen #3</Text>
                <Button
                    title="Go to Home"
                    onPress = {this.show}
                />
            </View>
        )
    }
}