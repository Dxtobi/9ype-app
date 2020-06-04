import Routes  from "./components/Routes";
import React from 'react';
import { Provider  } from "react-redux";
import store from './store/index';


//console.log('app',store)
const App = () => {
   return (
         
           <Provider store= { store }>
                <Routes />
           </Provider>
           
           )
}


export default App