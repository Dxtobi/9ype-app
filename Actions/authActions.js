import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import { AsyncStorage } from 'react-native';
import { GET_ALL_ERRORS, SET_CURRENT_USER } from './types';


export const registerUser =  ( userData, history )  => dispatch => {
  axios
    .post( '/api/users/register', userData )
    .then( res => history.push( '/login' ) )
    .catch( err =>
        dispatch({
          type: GET_ALL_ERRORS,
          payload: err.response.data
        })
      );
};

export const loginUser = ( userData ) => dispatch => {
  console.log('...', userData)
  axios
    .post('http://localhost:5000/api/users/login', userData)
    .then( res => {
      //Save to localStorage
      const { token } = res.data;

         AsyncStorage.setItem(
          '9ypejwtToken',
          token
        );

    //  localStorage.setItem( 'jwtToken', token );
      //Set token to Auth header
      setAuthToken( token );
      //Decode token to get user data
      const decoded = jwt_decode( token );
      //Set current user
      dispatch( setCurrentUser( decoded ) );

    })
    .catch( err =>
      dispatch({
        type: GET_ALL_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  AsyncStorage.removeItem('9ypejwtToken')
  //localStorage.removeItem( 'jwtToken' );
  // Remove auth header for future requests
  setAuthToken( false );
  // Set the current user to {} which will set isAuthenticated to false
  dispatch( setCurrentUser( { } ) );
}