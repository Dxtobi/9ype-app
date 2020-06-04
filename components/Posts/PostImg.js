import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function PostImg() {
  return (
    <View style={styles.postimg}>
       
    </View>
  );
}

const styles = StyleSheet.create({
    postimg: {
     height: 200,
    // flexDirection: 'row',
    // alignItems:'center',
   //  justifyContent: 'space-between',
     borderRadius: 20,
     paddingLeft: 5,
     paddingRight: 5,
     backgroundColor: '#000000a3',
     marginTop: 5,
   },
});
