import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function PostText() {
  return (
    <View style={styles.postcontainer}>
     <Text style={styles.text}>
       lorem lipson dickson lorem lipson dickson
       lorem lipson dicksonlorem lipson dickson
     </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  postcontainer: {
   paddingLeft: 5,
   paddingRight: 5,
   marginTop: 1
  },
  text:{
   // color:'white'
   },
});
