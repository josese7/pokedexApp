import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { RootStackParams } from '../navigation/TabHome'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetail } from '../components/PokemonDetail';


interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}
export const PokemonScreen = ({navigation, route }: Props) => {

  const { simplePokemon, color} = route.params
  const {id, name, picture } = simplePokemon
  const { top } = useSafeAreaInsets()

  const {isLoading, pokemon } = usePokemon(id)

  console.log(pokemon.moves)
  return (
    <View style={{flex:1}}>
        {/*Header*/}
        <View
          style={{
            ...styles.headerContainer,
            backgroundColor: color,
            
          }}>
            {/*BackButton*/}
            <TouchableOpacity
              onPress={()=> navigation.pop()}
              activeOpacity={0.8}
              style={{
                ...styles.backButton, 
                top : top + 10
              }}

            >
              <Icon 
                name="arrow-back-outline"
                color="white"
                size={40}
              />

            </TouchableOpacity>

            <Text
            style={{
              ...styles.pokemonName,
              top: top+35
            
            }}
            > {name + '\n'} #{id} </Text>
            {/*  Pokebola blanca*/}
            <Image
              style={{...styles.pokeball}}
              source={require('../assets/pokebola-blanca.png')}
            />

            <FadeInImage
              uri={picture}
              style={ styles.pokemonImage}
            />
        </View>
        { isLoading 
        ?(
          <View style={ { ...styles.loadingIndicator}}>
            <ActivityIndicator
              color= { color}
              size={50}
            />
          </View>
         )
        :
        <PokemonDetail pokemon={pokemon}/>
        
        }
        {/* Detalles y loading */}
        

    </View>
    
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    height:370,
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000
  },
  backButton:{
    position: 'absolute',
    left:20
  },
  pokemonName:{
    color:'white',
    fontSize:45,
    alignSelf: 'flex-start',
    left: 20
  },
  pokeball:{
      width:250,
      height:250,
      bottom: -10,
      opacity: 0.7
    },
    pokemonImage:{
      width: 250,
      height: 250,
      position: 'absolute',
      bottom: -25
    },
    loadingIndicator:{
      flex:1,
      //backgroundColor:'red',
      justifyContent: 'center',
      alignItems:'center'
    }
})
