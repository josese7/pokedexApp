import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabHome } from './TabHome';
import { Platform } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { TabSearch } from './TabSearch';

const Tab = createBottomTabNavigator();

export const  Tabs = ()=> {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={{
            tabBarActiveTintColor: '#5856D6',
            headerShown: false,
            tabBarLabelStyle:{
                marginBottom:  ( Platform.OS === 'ios') ? 0 : 10,
                //backgroundColor: 'blue' 
            },
            tabBarStyle:{
              position: 'absolute',
              backgroundColor: 'rgba(255,255,255,0.95)',

              //Para la linea del tab
              borderWidth: 0,
              elevation: 0,
              height:  ( Platform.OS === 'ios') ? 80 : 60,
            },
            
        }}
    >
      <Tab.Screen 
        name="TabHome" 
        component={TabHome}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color}) => 
              <Icon color={color} size={20} name="list-outline"/>
        }}  
        />
      <Tab.Screen 
        name="TabSearch" 
        component={TabSearch} 
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color}) => 
              <Icon color={color} size={20} name="search-outline"/>
        }}
        />
    </Tab.Navigator>
  );
}