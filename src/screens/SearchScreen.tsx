
import React, {useState, useEffect} from 'react'
import { Platform, Text, View, FlatList, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import {Keyboard } from 'react-native'

import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import {styles as globalStyles } from '../theme/appTheme'
import { PokemonCard } from '../components/PokemonCard';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';


const screenWidth = Dimensions.get('window').width
export const SearchScreen = () => {

  const {top } = useSafeAreaInsets();

  const {isFetching, simplePokemonList} = usePokemonSearch()

  const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])
  const [term, setTerm] = useState('')

  useEffect(() => {
    
    if(term.length === 0){
      return setPokemonFiltered([])
    }
    if (isNaN(Number(term))){
      setPokemonFiltered(
        simplePokemonList.filter(
          (poke) => poke.name.toLocaleLowerCase()
                             .includes( term.toLocaleLowerCase() ) )
  
      )
    } else {
      const pokemonById =  simplePokemonList.find((pokemon) => pokemon.id === term)
      setPokemonFiltered(
       (pokemonById )? [pokemonById] : []
      )
    }
    
  
    
  }, [term])
  
  if ( isFetching ) {
    return(
     <Loading/>
    )
  }
  return ( 
    
    <View style={{
        flex:1,
        //marginTop: (Platform.OS === 'ios' ? top : top + 10),
        marginHorizontal: 20
    }}> 
    <SearchInput
      onDebounce={(value) => setTerm(value) }
      style={{
        position:'absolute',
        zIndex: 999,
        width: screenWidth - 40,
        top: (Platform.OS === 'ios') ? top : top + 30
      }}
    />
    <FlatList
            data = {pokemonFiltered}
            keyExtractor = { (pokemon) => pokemon.id}
            showsVerticalScrollIndicator = { false }
            numColumns={2}

            //Header
            ListHeaderComponent={(
              <Text
                style={{
                  ...globalStyles.title,
                  ...globalStyles.globalMArgin,
                  paddingBottom: 10,
                  marginTop:top+80
                }}
                >{ term }</Text> 
            )}

            renderItem = {  ({ item }) => { return <PokemonCard pokemon= { item }/>}}
          />
  
   
       
    </View>
    
  )
}

