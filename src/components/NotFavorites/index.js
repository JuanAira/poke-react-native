import React from "react";
import { View, Text, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function NotFavorites() {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style={styles.text}>
        Not favorites
      </Text>
      <Image
        source={require('../../assets/3371471.jpg')}
        style={styles.image}
      />
    </View>
  );
}

