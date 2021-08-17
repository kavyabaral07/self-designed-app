import {StatusBar}from 'expo-status-bar'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer}from '@react-navigation/native' 
import {createStackNavigator}from '@react-navigation/stack'
import HomeScreen from "./screens/HomeScreen";
import Goalsscreen from './screens/Goalsscreen'
import Achievements from './screens/Achievements'

export default function App() {

  return (
      <NavigationContainer>
          <Stack.Navigator InitialRouteName ='Home' screenOptions={{headerShown:false}}>
                 <Stack.Screen name = 'Home'component={HomeScreen}/>
                 <Stack.Screen name = 'goals' component={Goalsscreen}/>
                 <Stack.Screen name = 'achievements'component={Achievements}/>
          </Stack.Navigator>
          

      </NavigationContainer>
  );
}
const Stack = createStackNavigator()


const styles = StyleSheet.create({
 
});
