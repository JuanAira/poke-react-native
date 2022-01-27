import { StyleSheet } from "react-native";
import { COLORS } from '../../utils/constants';

export const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 450,
    position: "absolute",
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
  },
  content: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
  name: {
    color: COLORS.WHITE,
    fontWeight: "bold",
    fontSize: 16,
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 390,
    resizeMode: "contain",
  },
});