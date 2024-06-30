import React from 'react'
import {Text, View, StyleSheet,Button } from 'react-native';
const Home=({navigation}) =>{
 return(
   <View> 
      <Text>selamat datang di aplikasi daftar teman! </Text>
      <Button title ='Go to About'
      onPress={()=>navigation.navigate('About')} />
      <Button title ='Kontak'
      onPress={()=>navigation.navigate('kontak')} />
   </View>
 )
};
export default Home;
