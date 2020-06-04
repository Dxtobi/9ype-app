import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function PostHeader() {
  return (
    <View style={styles.header}>
        <TouchableOpacity>
          <View style={styles.containerImg}/>
        </TouchableOpacity>
        <Text style={styles.text}>joseph dex</Text>
        <Text style={styles.date}>jen 15 12am</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
     height: 45,
     flexDirection: 'row',
     alignItems:'center',
   //  justifyContent: 'space-between',
     paddingLeft: 0,
     paddingRight: 0,
   },
   text:{
   // color:'white'
   },
   date:{
    position: 'absolute',
   // color:'white',
    right: 0
   },
   containerImg:{
    height: 40,
    width:40,
    borderRadius: 50,
    backgroundColor: 'gray',
    marginRight: 10
  }
});
