import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer/reducer.js'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk));
// console.log(store.getState())



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

