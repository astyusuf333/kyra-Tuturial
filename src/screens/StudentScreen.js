import React from 'react';
import { View, FlatList, SafeAreaView} from 'react-native';
import AppStudent from '../components/AppStudent';

const StudentScreen = () => {
  const studentList = [
    { id: '1', nim: '201769040027', nama: 'Muhammad Yusuf'},
    { id: '2', nim: '201769040008', nama: 'Usagi Minami'},
    { id: '3', nim: '201769040018', nama: 'Myu Shuga'},
    { id: '4', nim: '201769040028', nama: 'Alummah Misaki'},
    { id: '5', nim: '201769040012', nama: 'Dessy Amber'},
    { id: '6', nim: '201769040098', nama: 'Tahila'},
  ];

  const studentRender = ({item}) => {
    return (
      <AppStudent nim={item.nim} nama={item.nama}/>
    )
  };

  return (
   <SafeAreaView>
     <FlatList
      data={studentList}
      renderItem={studentRender}
      keyExtractor={item => item.id}
     />
   </SafeAreaView> 
  )
}

export default StudentScreen;