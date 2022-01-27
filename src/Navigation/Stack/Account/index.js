import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import useAuth from '../../../hooks/useAuth';
//Screens
import Account from '../../../screens/Account';

const Stack = createStackNavigator();

export default function AccountNavigation() {
  const { auth } = useAuth();
  const optionsCustom = auth ?
    {
      title: "",
    }
    :
    {
      title: "",
      header: () => null,
    };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={optionsCustom}
      />
    </Stack.Navigator>
  )
}