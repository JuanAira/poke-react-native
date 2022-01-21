import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Settings from '../../screens/Settings';

const Stack = createStackNavigator();

export default function NavigationStack() { 
  return (
    <Stack.Navigator initialRouterName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>
  )
}