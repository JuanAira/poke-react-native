import React from 'react';
import {
  FlatList,
  ActivityIndicator,
} from "react-native";
import PokemonCard from '../PokemonCard';

import { styles } from './styles';

export default function PokemonList(props) {
  const { pokemons, loadPokemons, isNext } = props;

  const laodMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.flatListContentContainer}
      onEndReached={isNext && laodMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext && (
          <ActivityIndicator
            size="large"
            style={styles.spinner}
            color="#AEAEAE"
          />
        )
      }
    />
  );
}

