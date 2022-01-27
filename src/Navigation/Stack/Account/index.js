import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import Account from '../../../screens/Account';

const Stack = createStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{
          title: "ddfdf",
          header: () => null,
        }}
      />
    </Stack.Navigator>
  )
}