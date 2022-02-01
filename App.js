import Routes  from "./components/Routes";
import React from 'react';
import { Provider  } from "react-redux";
import store from './store/index';



const App = () => {
     return (
           <Provider store= { store }>
                <Routes />
           </Provider>
           )
}


export default App