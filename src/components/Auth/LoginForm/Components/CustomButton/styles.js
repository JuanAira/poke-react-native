import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from '../../../../../utils/constants';
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  view: {
    borderRadius: 16,
    height: 54,
    padding: 18,
    borderRadius: 16,
    marginHorizontal: 30,
    backgroundColor: COLORS.PRIMARY,
  },
  text: {
    color: COLORS.WHITE,
    marginHorizontal: 30,
    height: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});