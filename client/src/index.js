import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import createStore from 'redux/src/createStore'
import combineReducers from 'redux/src/combineReducers'
import {Provider} from 'react-redux'

import userReducer from './reducers/user-reducer'
import workoutReducer from './reducers/workout-reducer'

const rootReducer = combineReducers({
  user: userReducer,
  workout: workoutReducer
});

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
