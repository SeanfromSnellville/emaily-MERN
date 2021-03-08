//Redux side of things for the application as well as
//Root component (App.js)
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//React DOM takes two arguments
//Root component and location of root component within DOM
//Provider is a react tag that knows how to read changes from redux store
ReactDOM.render(
<Provider store={store}><App/></Provider>, 
document.querySelector('#root')
)