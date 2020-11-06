import React from 'react';
import { View, FlatList, Text, SafeAreaView, StyleSheet} from 'react-native';
import AppProduct from '../components/AppProduct';


const ProductScreen = () => {
  const productList = [
    {
      id: '1',
      title: 'Produk 1',
      description: 'Deskripsi 1',
      price: 5000,
      image : 'https://cf.shopee.co.id/file/6029236d482da3806cb9ec27e829a398'
    },
    {
      id: '2',
      title: 'Produk 2',
      description: 'Deskripsi 2',
      price: 5000,
      image : 'https://cf.shopee.co.id/file/412e4342eb575078ba5bb0f128f053ff'
    }
  ];

  const productRender = ({item}) => {
    return (
      <AppProduct product={item}/>
    )
  };

  return (
   <SafeAreaView style={style.container}>
     <FlatList
      data={productList}
      renderItem={productRender}
      keyExtractor={item => item.id}
     />
   </SafeAreaView> 
  );
}

const style = StyleSheet.create({
  container : {
    backgroundColor: 'grey'
  }
});

export default ProductScreen;