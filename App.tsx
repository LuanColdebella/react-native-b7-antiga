import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainStack from './src/stacks/MainStack';
import { persistor, store } from './src/store';

function App(){
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}

export default App;