import React from 'react'
/* import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons' */
import { NavigationContainer } from '@react-navigation/native';
/* import { Navigator } from './src/navigation/navigator'; */
import { Tabs } from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
     {/*  <Navigator /> */}

     <Tabs/> 

    </NavigationContainer>
  )
}

export default  App;