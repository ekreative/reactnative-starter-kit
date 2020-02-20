import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store, persistor } from './app/config/store';
import AppNavigator from './app/config/routes';
import ErrorBoundary from './app/components/ErrorBoundary/ErrorBoundary';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen}/>
            </Stack.Navigator>
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </NavigationContainer>
  );
};

export default App;
