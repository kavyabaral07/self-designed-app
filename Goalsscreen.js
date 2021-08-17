import React, {Component} from 'react';
import {View,Text,StyleSheet,SafeAreaView,TouchableOpacity,Platform,StatusBar,ImageBackground,Image}from 'react-native';

export default class Goals extends Component {
     render(){
         return(
            <View style= {styles.container}>
                   
                  <View style = {styles.titleBar}>
                  <Text style={styles.titleText}> GOALS</Text>
                  </View>
                  
                  
                  <Image source={require("../assets/whitebox.png")}style={styles.iconImage} />
                  <Text style={styles.routeText}>
                Become a scientist when you grow up  
                </Text>
    

                  
                  <Image source={require("../assets/whitebox.png")}style={styles.iconImage} />
                  <Text style={styles.routeText}>Become the topper in class</Text>
                    <Image source={require("../assets/whitebox.png")}style={styles.iconImage} />
                    <Text style={styles.routeText}>travel around the world</Text>
                    <Image source={require("../assets/whitebox.png")}style={styles.iconImage} />
                    <Text style={styles.routeText}>become rich</Text>

</View>
         )
          }
}

             

        
     


var styles = StyleSheet.create({
     container:{
       flex:1
     } ,
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
}})
