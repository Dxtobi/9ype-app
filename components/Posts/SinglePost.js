import React from 'react';
import { StyleSheet, Text, View, ScrollView ,TouchableOpacity } from 'react-native';
import Post from './Post'
export default function SinglePost() {
  return (
    <View style={styles.sp}>
      <ScrollView >
        <Post/>
        <Post/>
        <Post/>
      </ScrollView>
      <View style={styles.bottom}/>
    </View>
  );
}

const styles = StyleSheet.create({

  sp: {
   paddingBottom: 90
  },
  bottom:{
    //height: 20
  }
});
