// store/index.js

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../Reducer/Rootreducer';


const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
