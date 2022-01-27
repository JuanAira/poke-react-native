import { StyleSheet } from "react-native";
import { COLORS } from "../../../utils/constants";

export const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 22,
    padding: 20,
  },
  dataContent: {
    marginBottom: 20,
    padding: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    backgroundColor: COLORS.WHITE,
    borderRadius: 30,
    padding: 40,
    marginTop: 20,
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
  btnLogoun: {
    paddingTop: 20,
  },
});