import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import TabAboutScreen from '../pages/TabAboutScreen';

import MainStack from '../navigators/MainStack';




const Tab = createBottomTabNavigator();

export default function MainTab() {
  return (    
    <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({ focused, color, size }) => {
                
                let iconName = null;
                switch(route.name){
                    case 'TabHome': iconName = 'home'; break;
                    case 'TabAbout': iconName = 'user'; break;
                }

                return focused ? 
                <Feather name={iconName} size={24} color="red" /> 
                : <Feather name={iconName} size={24} color={color} />;
            },
        })}
    >
           <Tab.Screen name="TabHome" component={MainStack} options={{ tabBarLabel: 'Home' }}/>
           <Tab.Screen name="TabAbout" component={TabAboutScreen} options={{ tabBarLabel: 'Home' }}/>
    </Tab.Navigator>
  );
}
