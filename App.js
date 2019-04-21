import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { store, persistor } from './app/config/store'
import AppNavigator from './app/config/routes'
import ErrorBoundary from './app/components/ErrorBoundary/ErrorBoundary'

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  )
}

export default App
