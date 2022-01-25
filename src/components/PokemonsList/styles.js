import { StyleSheet, Platform } from "react-native";
import { DEVICE_NAME } from "../../utils/constants";

export const styles = StyleSheet.create({
  flatListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === DEVICE_NAME.ANDROID ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === DEVICE_NAME.ANDROID ? 90 : 60,
  },
});