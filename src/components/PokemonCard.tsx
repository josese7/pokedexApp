import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState, useRef } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import ImageColors from 'react-native-image-colors';

import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';0

const windowWidth = Dimensions.get('window').width
interface Props {
    pokemon: SimplePokemon;
}
export const PokemonCard = ({pokemon}: Props) => {

  const [bgColor, setBgColor] = useState('blue')

  const isMounted = useRef(true)

  const navigation = useNavigation<any>();

  useEffect(() => {
    
    ImageColors.getColors(pokemon.picture, {
            fallback: '#228B22',
        }).then( (colors: any) =>{
            if(!isMounted.current) return;

            (colors.platform === 'android') 
                ? setBgColor(colors.dominant || '#228B22')
                : setBgColor(colors.background || '#228B22')
        });
        return () => { //se retorna cuando se desmonta el componente
            isMounted.current = false
        }
  }, [])
  
  return (
    <TouchableOpacity
        activeOpacity={ 0.9 }
        onPress={ 
            ()=> navigation.navigate('PokemonScreen', 
            {simplePokemon: pokemon,
             color:bgColor
            })
        }
    >

        <View
        style={{
            ...styles.cardContainer,
            width: windowWidth * 0.4,
            backgroundColor: bgColor

        }}
        >
            {/* Nombre del pokemon */}
            <View>
                <Text style={{...styles.name}}>
                    {pokemon.name}
                    {'\n#' + pokemon.id}
                </Text>
            </View>
            <View style={styles.pokebolaContainer}>
                <Image 
                    style={styles.pokebola}
                    source={ require('../assets/pokebola-blanca.png')}
                />
            </View>
            
            
                <FadeInImage
                uri={pokemon.picture}
                style = {{
                    ...styles.pokemonImage
                }}
                />
              
                
                
        </View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal: 10,
        backgroundColor: '#ADBABD',
        height: 120,
        width: 160,
        marginBottom:25,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top:20, 
        left: 20, 

    },
    pokebola: {
        width: 100,
        height: 100,
        position:'absolute',
        bottom: -25,
        right: -25
        
    },
    pokemonImage:{
        width: 120,
        height:120,
        position: 'absolute',
        right: -8,
        bottom: -10,
     },
    pokebolaContainer:{
        width:100,
        height:100,
        position: 'absolute',
        bottom:0,
        right:0,
        opacity: 0.6
    }
})
