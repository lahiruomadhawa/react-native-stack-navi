import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

export default class Screen2 extends Component{

    static navigationOptions = {
        title: 'About',
      };

    show = () =>{
        this.props.navigation.navigate('S3');
    }

    render(){
        return(
            <View style={styles.mainView}>
                <Text style={{textAlign:"center", fontSize:20}}>Screen #2</Text>
                <Button 
                    title = "Go To 3"
                    onPress = {this.show}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainView : {
        flex:1,
        backgroundColor : "#333333",
        padding:20
    },
    fieldBox : {
        backgroundColor : "#fcaf3f",
        borderRadius:10,
        marginBottom:40,
        marginTop:140
    },
    txtBoxes : {
        backgroundColor : "#ff773c",
        borderRadius:4,
        margin : 10,
        color:"white",
        fontWeight:"bold",
    }
})