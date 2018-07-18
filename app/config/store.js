import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  {},
  compose(
    applyMiddleware(thunk)
  )
)
export const persistor = persistStore(store)
