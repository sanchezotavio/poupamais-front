import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, Switch } from 'react-router-dom';
import {createHashHistory} from 'history'
import ReactGA from 'react-ga';


import './assets/main.scss'

import App from './components/App'
import HomePage from './pages/homePage'


import configureStore from './store/configureStore';

const store = configureStore();
const history = createHashHistory()


store.subscribe(() => {
  console.log(store.getState())
})

function fireTracking() {
    ReactGA.pageview(window.location.hash);
}

ReactGA.initialize('UA-XXXXXXXX');

ReactDOM.render(
  <Provider store={store}>
    <Router  onUpdate={fireTracking} history={history}>
        <App>
            <Switch>
              <Route exact path="/" component={HomePage} /> 
            </Switch>
        </App>
    </Router>
  </Provider>, document.getElementById('app'))