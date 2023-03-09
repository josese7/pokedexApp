import React, {useState} from 'react'
import { StyleSheet, View, TextInput, Platform, StyleProp,ViewStyle } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { useEffect } from 'react';



interface Props{
    style?: StyleProp<ViewStyle>,
    onDebounce: (value: string)=> void;
    // Propiedad para recibir los estilos
}
export const SearchInput = ({ style, onDebounce } : Props) => {

    const [textValue, setTextValue] = useState("")

    const debouncedValue = useDebouncedValue(textValue)

    useEffect(() => {
        onDebounce(debouncedValue)
    }, [debouncedValue])
    
   
  return (
<View style={{ 
    ...styles.container,
    ...style as any //por un error que no permite hacer "spread", debe ser un objeto, pero este puede venir vacio
}}>
        <View style={ styles.textBackground}>

            <TextInput
                placeholder='Buscar pokemon'
                style={{
                        ...styles.textInput,
                        top: (Platform.OS === 'ios') ? 0 : 3,
                    }}
                autoCapitalize='none'
                autoCorrect={false}
                value = {textValue}
                onChangeText = {setTextValue}
            />
            <Icon 
                name="search-outline"
                color="grey"
                size={30}
            />

        </View>

    </View>
  )
}

const styles= StyleSheet.create({
    container:{
        //backgroundColor: 'red'
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    textInput:{
        flex:1,
        fontSize:18
    }
});
