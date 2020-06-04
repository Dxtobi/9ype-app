import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import PostHeader from './PostHeader';
import PostText from './PostText';
import PostImg from './PostImg';
import PostFooter from './PostFooter';

export default function Post() {
  return (
    <View style={styles.postwrapper}>
        <PostHeader/>
        <PostImg/>
        <PostText/>
        <PostFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
    postwrapper:{
     paddingLeft: 20,
     paddingRight: 20,
     marginTop: 30,
     
    // backgroundColor: '#222222'
    },
});
