import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { SearchScreen } from '../screens/SearchScreen';



//para especificar el tipo de informacion entre pantallas
export type RootStackParams = {
  HomeScreen: undefined,
  PokemonScreen: { simplePokemon: SimplePokemon, color: string}
}

const Stack = createStackNavigator<RootStackParams>();
export const TabHome = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle:{
        backgroundColor: 'white'
      }
      //cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      
  }}
    >
      
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
     
    </Stack.Navigator>
  );
}

