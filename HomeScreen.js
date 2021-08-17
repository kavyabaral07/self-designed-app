import React, {Component} from 'react';
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image}from 'react-native';

export default class HomeScreen extends Component {
     render(){
         return(
            <View style= {styles.container}>
                  <Text>
                  WELCOME TO YOUR PERSONALIZED APP!!
                  </Text>
            </View>
         )
     }
}

var styles = StyleSheet.create({
     container:{
       flex:1
     } ,
       
         fontSize:25,
       fontWeight:"bold",
       textAlign:'center',
       color:"black",
       marginRight:20,
       marginTop:50
     
      
     },

)