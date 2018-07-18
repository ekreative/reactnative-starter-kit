import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './app/config/store'
import AppNavigator from './app/config/routes'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
}
