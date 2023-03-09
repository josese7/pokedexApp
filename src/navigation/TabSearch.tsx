import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { SearchScreen } from '../screens/SearchScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
export type RootStackParamsSearch = {
    SearchScreen: undefined,
    PokemonScreen: { simplePokemon: SimplePokemon, color: string}
  }
  
  const StackSearch = createStackNavigator<RootStackParamsSearch>();
  export const TabSearch = () => {
    return (
    
      <StackSearch.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor: 'white'
        }
        //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        
    }}
      >
 
        <StackSearch.Screen name="SearchScreen" component={SearchScreen} />
        <StackSearch.Screen name="PokemonScreen" component={PokemonScreen} />

       
      </StackSearch.Navigator>
    );
  }