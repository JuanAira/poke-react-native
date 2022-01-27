import React, { useState, useCallback } from "react";
import { View, Text, Button, TextInput } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { size } from "lodash";
import useAuth from "../../../hooks/useAuth";
import { getPokemonsFavoriteApi } from "../../../api/favorite";
import { styles } from "./styles";
import CustomButton from "../LoginForm/Components/CustomButton";

export default function UserData() {
  const { auth, logout } = useAuth();
  const [total, setTotal] = useState(0);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        try {
          const response = await getPokemonsFavoriteApi();
          setTotal(size(response));
        } catch (error) {
          setTotal(0);
        }
      })();
    }, [])
  );

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>{`Welcome, ${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu style={styles.itemMenu} title="Nombre" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu style={styles.itemMenu} title="Username" text={auth.username} />
        <ItemMenu style={styles.itemMenu} title="Email" text={auth.email} />
        <ItemMenu style={styles.itemMenu} title="Total Favoritos" text={`${total} pokemons`} />
      </View>

      <CustomButton title="Log out" onPress={logout} />
    </View>
  );
}

function ItemMenu(props) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
    </View>
  );
}

