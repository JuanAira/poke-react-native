import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/constants";

export const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 16,
    marginHorizontal: 10,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: COLORS.WHITE,
  }
});