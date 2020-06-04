import { createStore } from "redux";

import storeReducer from './store'

const store = createStore(storeReducer)
//console.log('index',rootReducer,configureStore)
export default store