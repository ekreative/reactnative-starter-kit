import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './app/screens/ScreenA/ScreenA';
import ScreenB from './app/screens/ScreenB/ScreenB';
import ScreenС from './app/screens/ScreenC/ScreenC';
import ScreenWithHooks from './app/screens/ScreenWithHooks/ScreenWithHooks';
import { store, persistor } from './app/config/store';
// import AppNavigator from './app/config/routes';
import ErrorBoundary from './app/components/ErrorBoundary/ErrorBoundary';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="ScreenA">
              <Stack.Screen name="ScreenA" component={ScreenA} />
              <Stack.Screen name="ScreenB" component={ScreenB} />
              <Stack.Screen name="ScreenС" component={ScreenС} />
              <Stack.Screen
                name="ScreenWithHooks"
                component={ScreenWithHooks}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
};

export default App;
