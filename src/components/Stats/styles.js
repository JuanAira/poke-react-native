import { StyleSheet } from "react-native";
import { COLORS } from '../../utils/constants';

export const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "35%",
  },
  statName: {
    fontSize: 14,
    color: COLORS.GRAY,
  },
  blockInfo: {
    width: "65%",
    flexDirection: "row",
    alignItems: "center",
  },
  number: {
    width: "16%",
    fontSize: 14,
  },
  bgBar: {
    backgroundColor: COLORS.LIGHT_GRAY,
    width: "84%",
    height: 8,
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 8,
    borderRadius: 20,
  },
});