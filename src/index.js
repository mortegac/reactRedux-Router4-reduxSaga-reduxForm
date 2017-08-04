import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, combineReducers, applyMiddleware } from 'redux'
import { createStore, applyMiddleware } from 'redux'
// import { reducer as formReducer } from 'redux-form'
import createSagaMiddleware from 'redux-saga'

import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import rootSagas from './pages/post/sagas'
import rootReducers from './app/reducer'


import App from './app/App';
import registerServiceWorker from './registerServiceWorker';


const history    = createHistory()              // Create a history of your choosing (we're using a browser history in this case)
const routerHistoryMiddleware = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()

// let midlewares = [ routerHistoryMiddleware, sagaMiddleware ]
let midlewares = [ routerHistoryMiddleware, sagaMiddleware ]


let store = createStore(
    rootReducers,
    applyMiddleware(...midlewares)

)

sagaMiddleware.run(rootSagas)


ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history} sagaMiddleware={sagaMiddleware}>
        <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)


registerServiceWorker();
