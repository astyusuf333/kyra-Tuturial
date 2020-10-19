import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

const AppStudent = (props) => {
    console.log(props);
    return (
      <View style = {style.container}>
          <Text style={style.title}>Nim : {props.nim}</Text>
          <Text style={style.description}>Nama : {props.nama}</Text>
      </View>
    );
}

const style = StyleSheet.create({
    title : {
        fontSize : 20,
        color : 'ren',
        textAlign : 'left',
        textTransform : 'uppercase'
    },
    description: {
        fontSize : 25,
        color: 'green',
        fontWeight : 'bold',
        textAlign : 'left'
    }
});


export default AppStudent;