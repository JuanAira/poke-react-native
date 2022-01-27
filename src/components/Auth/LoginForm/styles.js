import { StyleSheet, Dimensions } from "react-native";
import { COLORS } from '../../../utils/constants';
const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  header: {
    width: width,
    height: height * 0.3,
    zIndex: 1,
  },
  linearGradient: {
    overflow: 'hidden',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  title: {
    marginTop: 80,
    marginBottom: height * 0.04,
    marginLeft: 25,
  },
  efect: {
    position: 'absolute',
    right: 0,
  },
  subtitleOne: {
    paddingLeft: 30,
    paddingTop: 6,
    color: COLORS.WHITE,
    fontSize: 17,
    fontWeight: "bold",
  },
  subtitleTwo: {
    paddingLeft: 30,
    paddingTop: 6,
    color: COLORS.WHITE,
    fontSize: 12,
  },
  view: {
    backgroundColor: COLORS.WHITE,
    height: height,
  },
  form: {
    marginTop: 20,
    margin: 10,
  },
  error: {
    textAlign: "center",
    color: COLORS.RED,
    marginTop: 0,
  },
  sectionTexIcon: {
    flexDirection: 'row',
    height: 54,
    padding: 20,
    borderRadius: 16,
    marginTop: 20,
    marginHorizontal: 30,
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
  icon: {
    color: COLORS.LIGHT_GRAY_SECONDARY,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 45,
    marginTop: 12,
    marginBottom: 50,
  },
  textSwicht: {
    marginTop: 8,
    marginLeft: 8,
    color: COLORS.LIGHT_GRAY_SECONDARY,
  },
  inputOk: {
    borderWidth: 0.5,
    borderColor: COLORS.GREEN,
  },
  inputFail: {
    borderWidth: 0.5,
    borderColor: COLORS.RED,
  },
  orConect: {
    marginHorizontal: 25,
    color: COLORS.LIGHT_GRAY_SECONDARY,
    marginTop: 38,
    fontSize: 12,
    textAlign: 'center',
  },
  sectionTexIconBotton: {
    flexDirection: 'row',
    height: 54,
    padding: 20,
    borderRadius: 16,
    marginTop: 20,
    marginHorizontal: 10,
    marginLeft: 0,
    backgroundColor: COLORS.LIGHT_GRAY,
    width: 150,
    display: 'flex',
  },
  singUp: {
    textAlign: "center",
    color: COLORS.LIGHT_GRAY_SECONDARY,
  },
  contentSingUp: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 85,
  },
  singUpColor: {
    color: COLORS.PRIMARY,
    marginLeft: 4,
  },
  image: {
    marginTop: -3,
  }
});