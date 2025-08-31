import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import AboutScreen from '../pages/AboutScreen';
import HomeScreen from '../pages/HomeScreen';

const Stack = createStackNavigator();

export default function MainStack() {
  return (    
    <Stack.Navigator screenOptions={{ //padrão
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: 'green',
      },
      headerTitleStyle: {
        color: 'black',
        fontSize: 16,
      }
    }}>

      <Stack.Screen name="Home" component={HomeScreen}  />
      <Stack.Screen name="About" component={AboutScreen} />

    </Stack.Navigator>
  );
}
