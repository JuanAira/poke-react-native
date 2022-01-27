import React from 'react';
import { Image } from 'react-native';

export function Pokeball() {
  return (
    <Image
      source={require('../../../assets/pokedex-2.png')}
      style={{
        width: 40,
        height: 40,
        marginTop: -15,
      }}
    />
  )
};
