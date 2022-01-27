import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/constants";

export const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
    marginTop: 30,
  },
  view: {
    width: "100%",
    height: 450,
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: COLORS.WHITE,
  },
  image: {
    width: 250,
    height: 250,
    marginHorizontal: 70,
  },
});