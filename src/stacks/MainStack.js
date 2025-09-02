import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import EditNoteScreen from '../pages/EditNoteScreen';
import ListScreen from '../pages/ListScreen';
const Stack = createStackNavigator();

export default function MainStack(){
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#222'
            },
            headerTintColor: '#FFF'
        }}>
            <Stack.Screen name="List" component={ListScreen} />
            <Stack.Screen name="EditNote" component={EditNoteScreen} />
        </Stack.Navigator>
    )
}