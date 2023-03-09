import {StyleSheet, Dimensions } from "react-native"
const { width, height} = Dimensions.get('window')
export const styles = StyleSheet.create({
    globalMArgin:{
        marginHorizontal:20
    },
    pokebolaBG: {
        position:'absolute',
        width:0.7*width,
        height: 300,
        top: -100,
        right:-100,
        opacity:0.2
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
    }
})