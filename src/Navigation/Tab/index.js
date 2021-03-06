import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Image } from 'react-native';

//Navigation
import FavoriteNavigation from '../Stack/Favorite';
import PokedexNavigation from '../Stack/Pokedex';
import AccountNavigation from '../Stack/Account';

//Icons
import { Pokeball } from '../components/Icons/Pokeball';

import useAuth from '../../hooks/useAuth';

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  const { auth } = useAuth();

  return (
    <Tab.Navigator initialRouteName='Account'>
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} />
          )
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarIcon: () => Pokeball(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
          tabBarVisible: !!auth,
        }}
      />
    </Tab.Navigator>
  );
};
