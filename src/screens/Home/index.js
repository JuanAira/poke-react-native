import { View, Text } from 'react-native';
import React from 'react';
import { Button, SafeAreaView } from 'react-native';

export default function Home(props) {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Settings");
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Estamos en home screen</Text>
        <Text>Estamos en home screen</Text>
        <Text>Estamos en home screen</Text>
        <Text>Estamos en home screen</Text>
        <Text>Estamos en home screen</Text>
        <Text>Estamos en home screen</Text>
        <Text>Estamos en home screen</Text>
        <Button title="Ir a ajustes" onPress={goToPage} />
      </View>
    </SafeAreaView>
  );
}
