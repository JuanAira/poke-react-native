import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import NavigationStack from './src/Navigation/Stack';
import NavigationTab from './src/Navigation/Tab';
import NavigationDrawer from './src/Navigation/Drawer';

export default function App() {
  return (
    <NavigationContainer>{
/*       <NavigationStack />
      <NavigationTab /> */
      <NavigationDrawer />
    }</NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
