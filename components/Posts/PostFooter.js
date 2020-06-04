import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function PostFooter() {
  return (
    <View style={styles.footer}>
      <View  style={styles.icon}></View>
      <View  style={styles.icon}></View>
      <View  style={styles.icon}></View>
    </View>
  );
}

const styles = StyleSheet.create({

  footer: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   paddingLeft: 5,
   paddingRight: 5,
  },
  icon:{
    width: 30,
    height: 30,
    backgroundColor: 'gray',
    borderRadius: 50,
    marginTop: 10,
  }
});
