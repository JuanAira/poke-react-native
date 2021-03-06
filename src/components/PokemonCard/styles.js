import { StyleSheet } from "react-native";
import { COLORS } from '../../utils/constants';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 220,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    flex: 1,
    borderRadius: 15,
    padding: 15,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 28,
    color: COLORS.WHITE,
    fontSize: 11,
  },
  name: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    width: 150,
    height: 150,
  },
});