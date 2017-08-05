import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import createSagaMiddleware from 'redux-saga'

import { Provider } from 'react-redux'
import rootSagas from './pages/post/sagas'
import rootReducers from './app/reducer'


import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware()


// const history    = createHistory()              // Create a history of your choosing (we're using a browser history in this case)
// const routerHistoryMiddleware = routerMiddleware(history)
// const sagaMiddleware = createSagaMiddleware()

// let midlewares = [ routerHistoryMiddleware, sagaMiddleware ]
// let midlewares = [ routerHistoryMiddleware, sagaMiddleware ]
// const midlewares = (routerHistoryMiddleware, sagaMiddleware) => 
//                     value => routerHistoryMiddleware(
//                                                       sagaMiddleware(value)
//                                                     )

let store = createStore(
    rootReducers,
    applyMiddleware(sagaMiddleware)

)
// console.log('rootSagas', rootSagas)
// console.log('store', store)

sagaMiddleware.run(rootSagas)
  .done.catch((error) => console.log(error));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
