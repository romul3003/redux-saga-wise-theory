import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import reducer from './reducers'
import { history } from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose

const middleware = [sagaMiddleware, routerMiddleware(history)]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
)

const store = createStore(reducer, enhancer)

sagaMiddleware.run(rootSaga)

export default store
