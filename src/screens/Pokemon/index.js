import { ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getPokemonDetailsApi } from '../../api/pokemon';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Header from '../../components/Header';
import Type from '../../components/Type';
import Stats from '../../components/Stats';

export default function Pokemon(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const { id } = params;

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRighy: () => null,
      headerLeft: () =>
        <Icon
          name="arrow-left"
          color='#fff'
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />,
    })
  }, [navigation, params])

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi({ id });
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [id]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
