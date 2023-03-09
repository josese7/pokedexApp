import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { FullPokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';

interface Props {
    pokemon: FullPokemon;
}

export const PokemonDetail = ({pokemon} : Props) => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      
      }}
    >
      <View
        style={{
          ...styles.container,
          marginTop:420
        }}
      >
        <Text style={styles.title}>Types</Text>
          <View style={{flexDirection:'row'}}>
            {
              pokemon.types.map(({ type }) => {
                return (
                    <Text style={{
                      ...styles.regularText,
                      marginTop:10
                    }}
                        key={type.name}
                    >{type.name}</Text>
                );
            })
                  
            }
          </View>
          <Text style={styles.title}>Types</Text>
          <Text style={{...styles.regularText}}> {pokemon.weight}kg </Text>
      </View>
      
      {/* Sprites */}
      <View style={{
        ...styles.container,
        }}
      >
          <Text style={{...styles.title}}>Sprites</Text>
      </View>

      <ScrollView
        //style
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />

      </ScrollView>
        {/* Habilidades */}
      <View style={{
        ...styles.container,
        }}
      >
          <Text style={{...styles.title}}>Skills</Text>
      
            <View style={{flexDirection:'row'}}>
              {
                pokemon.abilities.map(({ ability }) => {
                  return (
                      <Text style={{
                        ...styles.regularText,
                        marginRight:10
                      }}
                          key={ability.name}
                      >
                          {ability.name }
                      </Text>
                  );
              })
                    
              }
            </View>
      </View>

      {/* Movimientos */}
      <View style={{
        ...styles.container,
        }}
      >
          <Text style={{...styles.title}}>Moves</Text>
      
            <View style={{flexWrap: 'wrap', flexDirection:'row'
            }}>
              {
                pokemon.moves.map(({ move }) => {
                  return (
                      <Text style={{
                        ...styles.regularText,
                        marginRight:10
                      }}
                          key={move.name}
                      >
                          {move.name }
                      </Text>
                  );
              })
                    
              }
            </View>
      </View>

       {/* Stats */}
      <View style={{
        ...styles.container,
        }}
      >
          <Text style={{...styles.title}}>Stats</Text>
      
            <View>
              {
                pokemon.stats.map((stat, i) => {
                  return (
                    <View key={stat.stat.name + i}
                          style={{flexDirection: 'row'}}
                    >

                    
                      <Text style={{
                        ...styles.regularText,
                        marginRight:10,
                        width:200
                      }}
                          key={stat.stat.name}
                      >
                          {stat.stat.name }
                      </Text>
                      <Text style={{
                        ...styles.regularText,
                        fontWeight: 'bold'
                      }}
                          key={stat.stat.name}
                      >
                          {stat.base_stat }
                      </Text>
                      </View>
                  );
              })
                    
              }
            </View>
            {/*Sprite final */}
            <View style={{
              marginBottom:20,
              alignItems: 'center'
            }}>
            <FadeInImage
              uri={pokemon.sprites.front_default}
              style={styles.basicSprite}
            />
            </View>
            

      </View>



    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    marginHorizontal:20
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:20
  },
  regularText:{
    fontSize:19
  },
  basicSprite:{
    height:100,
    width:100
  }
})
