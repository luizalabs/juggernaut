import { createStore, applyMiddleware, compose } from 'redux'

import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
// Array com todas as dependencias
const middleware = [thunk]

/* eslint-disable no-underscore-dangle */
// configurando redux devtools plugin do google chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(...middleware))
)

const persistor = persistStore(store)

export { store, persistor }
