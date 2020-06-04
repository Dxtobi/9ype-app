import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { connect } from 'react-redux'
//import { loginUser } from '../../Actions/authActions';
import { loginUser } from '../../Actions/index'
import APIKit, {setClientToken} from '../../Auth/APIKit';

const initialState = {
  username: '',
  password: '',
  errors: {},
  isAuthorized: false,
  isLoading: false,
  
};

class Login extends Component {
  state = initialState;

 static getDerivedStateFromProps(props, state) {
  console.log(props, state)
 }  
  componentWillUnmount() {}
  
  componentWillReceiveProps(nextProps) {}
  onUsernameChange = username => {
    this.setState({username});
  };

  onPasswordChange = password => {
    this.setState({password});
  };

  onPressLogin() {
    const {username, password} = this.state;
    const payload = {username, password};
    if(username===''||password===''){
      return
    }
    //console.log('....' ,payload);
    this.props.loginUser(payload)
    //const onSuccess = ({data}) => {
      // Set JSON Web Token on success
    //  setClientToken(data.token);
    //  this.setState({isLoading: false, isAuthorized: true});
    //};

   // const onFailure = error => {
     // console.log(error && error.response);
     // this.setState({errors: error.response.data, isLoading: false});
   // };

    // Show spinner when call is made
    this.setState({isLoading: true});
    
   // APIKit.post('/api/users/login', payload)
    //  .then(onSuccess)
    //  .catch(onFailure);
  }

  render() {
 //   const {isLoading} = this.state;

    return (
      <View style={styles.containerStyle}>

        {!this.state.isAuthorized ?
         <View style={styles.inputContainerStyle}>
        

          <TextInput
            style={styles.input}
            value={this.state.username}
            maxLength={256}
            placeholder="Enter email..."
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
            onSubmitEditing={event =>
              this.passwordInput.wrappedInstance.focus()
            }
            onChangeText={this.onUsernameChange}
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />


          <TextInput
            ref={node => {
              this.passwordInput = node;
            }}
            style={styles.input}
            value={this.state.password}
            maxLength={40}
            placeholder="Enter password..."
            onChangeText={this.onPasswordChange}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
            blurOnSubmit
            onSubmitEditing={this.onPressLogin.bind(this)}
            secureTextEntry
            underlineColorAndroid="transparent"
            placeholderTextColor="#999"
          />


          <TouchableOpacity
            style={styles.loginButton}
            onPress={this.onPressLogin.bind(this)}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.redirectContainer} onPress={()=>{this.props.navigation.navigate('Register')}}><Text style={styles.redirect}>Register new account</Text></TouchableOpacity>
        </View> : <View><Text>Successfully authorized!</Text></View>}
      </View>
    );
  }
}

// Define some colors and default sane values
const utils = {
  colors: {primaryColor: '#af0e66'},
  dimensions: {defaultPadding: 12},
  fonts: {largeFontSize: 18, mediumFontSize: 16, smallFontSize: 12},
};

// Define styles here
const styles = {
  redirect:{
    color: '#00bcd4',
  },
  inputContainerStyle:{
    width: '80%'
   },
  redirectContainer:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    marginBottom: 32,
  },
  logotypeContainer: {
    alignItems: 'center',
  },
  logotype: {
    maxWidth: 280,
    maxHeight: 100,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   // backgroundColor: '#03000D',
  },
  input: {
    height: 50,
    padding: 12,
    //backgroundColor: '#03000D',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#00bcd4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    marginBottom: utils.dimensions.defaultPadding,
    marginTop:10
  },
  loginButton: {
    //borderColor: utils.colors.primaryColor,
    //borderWidth: 2,
    padding: utils.dimensions.defaultPadding,
    alignItems: 'center',
    justifyContent: 'center',
    //borderRadius: 6,
  },
  loginButtonText: {
   // color: utils.colors.primaryColor,
    fontSize: utils.fonts.mediumFontSize,
    fontWeight: 'bold',
  },
};
const mapStateToProps = ( state ) => ({
  auth: state.auth,
  //errors: state.errors
});
export default connect(mapStateToProps, {loginUser})(Login);