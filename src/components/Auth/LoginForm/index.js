import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Switch,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../../utils/userDB";
import useAuth from "../../../hooks/useAuth";
import { styles } from "./styles";
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { COLORS } from "../../../utils/constants";
import { useNavigation } from "@react-navigation/native";
import CustomButton from './Components/CustomButton';

export default function LoginForm() {
  const { login } = useAuth();

  const [error, setError] = useState("");
  const [passwordLock, setPasswordLock] = useState(true);

  const [switchValue, setSwitchValue] = useState(false);
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    //validationSchema: Yup.object(validationSchema()), just to shared
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("");
      const { username, password } = formValue;
      login(userDetails);
      navigation.navigate("Pokedex");
    },
  });

  return (
    <View style={styles.view}>
      <View style={styles.linearGradient}>
        <LinearGradient
          style={styles.linearGradient}
          colors={[COLORS.LINEAR_GRADIENT_PRIMATY, COLORS.LINEAR_GRADIENT_SECONDARY]}
        >
          <View style={styles.header}>
            <Image
              style={styles.title}
              source={require('../../../assets/Pokedex.png')}
            />
            <Image
              style={styles.efect}
              source={require('../../../assets/Header.png')}
            />
            <Text style={styles.subtitleOne}>Welcome to Performance</Text>
            <Text style={styles.subtitleTwo}>WELCOME BACK</Text>
          </View>
        </LinearGradient>
      </View>

      <View style={styles.form}>

        <View style={styles.sectionTexIcon}>
          <Icon
            name="user"
            color="#000"
            size={14}
            style={styles.icon}
          />
          <TextInput
            placeholder='Username'
            style={styles.input}
            autoCapitalize="none"
            value={formik.values.username}
            onChangeText={(text) => formik.setFieldValue("username", text)}
          />
          <Text style={styles.error}>{formik.errors.username}</Text>
        </View>

        <View style={styles.sectionTexIcon}>
          <Icon
            name="lock"
            color="#000"
            size={14}
            style={styles.icon}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={passwordLock}
            value={formik.values.password}
            onChangeText={(text) => formik.setFieldValue("password", text)}
          />
          <Text style={styles.error}></Text>
          {passwordLock ?
            <Icon
              name="eye-slash"
              color="#000"
              size={14}
              onPress={() => setPasswordLock(!passwordLock)}
              style={styles.icon}
            />
            :
            <Icon
              name="eye"
              color="#000"
              size={14}
              onPress={() => setPasswordLock(!passwordLock)}
              style={styles.icon}
            />
          }
        </View>
      </View>

      <View style={styles.container}>
        <Switch
          onValueChange={() => setSwitchValue(!switchValue)}
          value={switchValue}
          trackColor={{ false: COLORS.LIGHT_GRAY_SECONDARY, true: COLORS.PRIMARY }}
          thumbColor={COLORS.WHITE}
        />
        <Text style={styles.textSwicht}>
          Remember me
        </Text>
      </View>

      <CustomButton title="Login" onPress={formik.handleSubmit} />

      <Text style={styles.orConect}>
        _____________ OR CONNECT WITH _____________
      </Text>

      <View style={styles.container}>
        <View style={styles.sectionTexIconBotton}>
          <Image
            source={require('../../../assets/google.png')}
            style={styles.image}
          />
          <TextInput
            placeholder='Facebook'
            style={styles.input}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.sectionTexIconBotton}>
          <Image
            source={require('../../../assets/facebook.png')}
            style={styles.image}
          />
          <TextInput
            placeholder='Facebook'
            style={styles.input}
            autoCapitalize="none"
          />
        </View>
      </View>

      <View style={styles.contentSingUp}>
        <Text style={styles.singUp}>
          Don’t have an account?  
        </Text>
        <Text style={[styles.singUp,styles.singUpColor]}>
          Sign up
        </Text>
      </View>
      


    </View>
  );
}

const initialValues = () => ({
  username: "",
  password: "",
});

const validationSchema = () => ({
  username: Yup.string().required("*"),
  password: Yup.string().required("*"),
});
