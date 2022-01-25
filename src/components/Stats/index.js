import React from "react";
import { View, Text } from "react-native";
import { map, capitalize } from "lodash";
import { styles } from './styles';
import { COLORS } from "../../utils/constants";

export default function Stats(props) {
  const { stats } = props;

  const barStyles = ({ num }) => {
    const color = num > 49 ? COLORS.GREEN : COLORS.RED;
    return {
      backgroundColor: color,
      width: `${num}%`,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles({ num: item.base_stat })]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}

