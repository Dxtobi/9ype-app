import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function Topnav() {
  return (
    <View style={styles.topcontainer}>
      <View style={styles.containerImg}/>
      <View><TouchableOpacity><Text style={styles.text}>menu</Text></TouchableOpacity></View>
    </View>
  );
}

const styles = StyleSheet.create({
  text:{
 //  color:'white'
  },
  topcontainer: {
   // height: 10,
    flexDirection: 'row',
   // backgroundColor: '#222222',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerImg:{
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: 'gray'
  }
});
