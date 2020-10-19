import React from 'react';
import { View, Button, StyleSheet, SafeAreaView} from 'react-native';


const HomeScreen = ({ navigation }) => {
    console.log(navigation);
    return (
      <SafeAreaView style={style.container}>
      <View style={style.view}/>
        <View style={style.Button}>
        <Button
          title={"Go to Poducts"}
          onPress={() => navigation.navigate('Product')}
        />
        </View>
        <View>
        <Button
          title={"Student Screen"}
          onPress={() => navigation.navigate('Student')}
        />
      </View>
      </SafeAreaView>
    );
}

const style = StyleSheet.create({
  container: {
    marginVertical : 20,
    marginHorizontal : 20
  },
  Button:{
    marginBottom: 10,
  },
  view:{
    marginTop:550
  }
})

export default HomeScreen;