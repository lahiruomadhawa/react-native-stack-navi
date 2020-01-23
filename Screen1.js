import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native';

export default class Screen1 extends Component{ 
    
    constructor(props) {
        super(props)
    
        this.state = {
             un : '',
             pw : ''
        }
    }
    

    static navigationOptions = {
        // title: 'Home',
        headerTitleStyle : {
            fontWeight: 'bold',
        },
        headerStyle: {
            backgroundColor: '#333333',
            elevation:0 // meken yata border eka remove una
        },
      };

    show () {
        this.props.navigation.navigate('S2');
    }

    match = () => {
        if(this.state.un==""  && this.state.pw==""){
            Alert.alert("Ops !", "Username and Password cannot be Empty")
        }
        else if(this.state.un != this.state.pw){
            Alert.alert("Ops !", "Username and Password does not match")
        }
        else{
            this.show()
        }
    }

    render(){
        return(
            <View style={styles.mainView}>
                
                <View style={styles.fieldBox}>
                    <TextInput 
                        style={styles.txtBoxes}
                        placeholder="Enter Username"
                        onChangeText = {(txt) => this.setState({un:txt})}
                    ></TextInput>
                    <TextInput 
                        style={styles.txtBoxes}
                        placeholder="Enter Password"
                        onChangeText = {(txt) => this.setState({pw:txt})}
                        secureTextEntry
                    ></TextInput>
                </View>
                <TouchableOpacity
                    style={{backgroundColor:"#43ccff", height: 45,justifyContent:"center"}}
                    onPress = {this.match}
                >
                    <Text
                        style={{alignSelf:"center", fontWeight:"bold", fontSize:15,borderRadius:10}}
                    >Sign In</Text>
                </TouchableOpacity>
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