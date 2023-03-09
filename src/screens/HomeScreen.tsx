import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated'
import { styles } from '../theme/appTheme'
import { PokemonCard } from '../components/PokemonCard';



export const HomeScreen = () => {
  const { top }= useSafeAreaInsets();
  const { simplePokemonList, isLoading, loadPokemons}=usePokemonPaginated();
  return (
    <>

        <Image
          source={require('../assets/pokebola.png')}
          style={styles.pokebolaBG}
        />
        <View
          style={{
            ...styles.globalMArgin,
            alignItems: 'center'
             
          }}
        >

        
          <FlatList
            data = {simplePokemonList}
            keyExtractor = { (pokemon) => pokemon.id}
            showsVerticalScrollIndicator = { false }
            numColumns={2}

            //Header
            ListHeaderComponent={(
              <Text
                style={{
                  ...styles.title,
                  ...styles.globalMArgin,
                  top: top + 20,
                  marginBottom: top + 20,
                  paddingBottom: 10
                }}
                >Pokedex
              </Text> 
            )}
            renderItem = {({item}) => (
              <PokemonCard pokemon= { item}/>
            )}

            //INFINITE SCROLL

            onEndReached =  {loadPokemons}
            onEndReachedThreshold = {0.4}
            ListFooterComponent={ 
              <ActivityIndicator 
              style= {{ height: 100}}
              size={ 20 }
              color="grey"
              
              />}
          />
        </View>
       
    </>
  )
}
