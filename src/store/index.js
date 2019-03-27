import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'

import {
  persistStore,
  persistReducer
} from 'redux-persist'

import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'
import sagas from './sagas'

const persistConfig = {
  key: 'root',
  storage
}

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, rootReducer)
// Array com todas as dependencias
const middleware = [sagaMiddleware]

/* eslint-disable no-underscore-dangle */
// configurando redux devtools plugin do google chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const store = createStore(
  persistedReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

sagaMiddleware.run(sagas)

const persistor = persistStore(store)

export { store, persistor }
