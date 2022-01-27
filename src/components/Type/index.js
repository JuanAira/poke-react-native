import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { map, capitalize } from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";
import { styles } from "./styles";

export default function Type(props) {
  const { types } = props;

  return (
    <View style={styles.content}>
      {map(types, (item, index) => (
        <View
          key={index}
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType({ type: item.type.name }),
          }}
        >
          <Text style={styles.text}>{capitalize(item.type.name)}</Text>
        </View>
      ))}
    </View>
  );
}

