import React from 'react';
import Topnav from './Navs/Topnav';
import Footernav from './Navs/Footer'
import SinglePost from './Posts/SinglePost';
import { View, StyleSheet, Text ,  Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';
import LoginView from './Auth/LoginView'
import RegisterView from './Auth/RegisterView'
const Stack = createStackNavigator();

function Login(){
  return(
    <View styles={styles.login}>
      <Text>Login now</Text>
    </View>
  )
}

function Register({navigation}){
    return(
      <View styles={styles.login}>
        <Text>Register now</Text>
        <Button styles={styles.btn}
          title = 'register new account' onPress={()=>{
              navigation.navigate('Login')
          }}/>
      </View>
    )
  }

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >
        <Stack.Screen options={{header:()=>null }} name="Login" component={LoginView} />
        <Stack.Screen  options={{header:()=>null }} name="Register" component={RegisterView} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
    login:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 33,
        backgroundColor: 'gray',
        paddingTop:  33
    },
    btn:{
        width: 100
    }
  });