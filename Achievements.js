import React, {Component} from 'react';
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image}from 'react-native';

export default class Achievments extends Component {
     render(){
         return(
            <View style= {styles.container}>
                   

                  <Image source={require('../assets/checkbox.jpg')}></Image>
                  <Text>complete your favourite game</Text>
                  <Image source={require('../assets/checkbox.jpg')}></Image>
                  <Text>do all your chores</Text>
                  <Image source={require('../assets/checkbox.jpg')}></Image>
                  <Text>do all your homework</Text>
                  <Image source={require('../assets/checkbox.jpg')}></Image>
                  <Text>note down all notes from school</Text>
                  </View>
     

             

         )
     }
}

var styles = StyleSheet.create({
     container:{
       flex:1
     } ,
     androidSafeArea:{
          marginTop:Platform.OS==="android"?StatusBar.currentHeight:0
     },
     routeCard:{
     flex:0.25,
     marginLeft:30,
     marginRight:30,
     marginTop:30,
     borderRadius:120,
     backgroundColor:'white',
     
   
     },
     titleText:{
       fontSize:40,
       fontWeight:"bold",
       color:"white",
       textAlign:'center'
     },
     backgroundImage:{
       flex:1,
       resizeMode:'cover'
     },
     routeText:{ 
       
         fontSize:25,
       fontWeight:"bold",
       textAlign:'center',
       color:"black",
       marginRight:20,
       marginTop:50
     
      
     },
    
     iconImage:{
       position:"absolute",
       height:80,
       width:80,
       resizeMode:"contain",
       right:0,
       top:-20
     }
})