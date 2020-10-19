import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import {color} from 'react-native-reanimated';


const AppProduct = ({product}) => {
    console.log(product);
  return (
    <View style={style.card}>
        <Image style={style.image} source={{uri: product.image}}/>
        <View style ={style.titlePrice}>
            <Text style={style.title}>{product.title}</Text>
            <Text style={style.price}>{product.price}</Text>
        </View>
        <Text style={style.description}>{product.description}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    card : {
        paddingHorizontal : 10,
        paddingVertical : 20,
        backgroundColor: 'white',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderRadius : 20
    },
    image : {
        height: 250,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
        
    },
    titlePrice : {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    title : {
        color : 'black',
        fontSize: 25

    },
    price: {
        color: 'black',
        fontSize: 20
    },
    description: {
        marginVertical: 20,
        paddingHorizontal: 10,
        fontSize: 20,
        color: 'red'
    },
});


export default AppProduct;