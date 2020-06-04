// onSuccess in `onPressLogin` method in `LoginView.js`
const onSuccess = ({data}) => {
    // Set JSON Web Token on success
    setClientToken(data.token);
    this.setState({isLoading: false, isAuthorized: true});
  };
  
  // onFailure in `onPressLogin` method in `LoginView.js`
  const onFailure = error => {
    console.warn(error && error.response);
    this.setState({errors: error.response.data, isLoading: false});
  };