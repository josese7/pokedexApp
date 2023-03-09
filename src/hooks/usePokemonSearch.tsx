import React, {useEffect, useRef, useState} from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { Pokemon, PokemonPaginatedResponse, SimplePokemon } from '../interfaces/pokemonInterfaces';

export const usePokemonSearch = () => {
  
    const [isFetching, setIsFeching] = useState(true)
    const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])
    //const url = 'https://pokeapi.co/api/v2/pokemon?limit=40';
   
    const loadPokemons = async() => {
         const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1200');
       
        mapPokemonList(resp.data.results);

    }

    const mapPokemonList = ( pokemonList: Pokemon[]) => {
        
        const simplePokemonList: SimplePokemon[] = pokemonList.map(({name, url})=>{

            const urlParts = url.split('/');
            const id = urlParts[urlParts.length -2]
            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
             
            return { id, picture, name}
        });

        setSimplePokemonList([...simplePokemonList])
        setIsFeching(false)
    }
    useEffect(() => {
      loadPokemons();
    }, [])

    return { isFetching, simplePokemonList }
    


}
