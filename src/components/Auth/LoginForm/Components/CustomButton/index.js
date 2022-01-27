import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

export default function CustomButton(props) {
  const { title, onPress} = props;
  
  return (
    <View style={styles.view}>
      <Text style={styles.text} onPress={onPress}>{`${title}`}</Text>
    </View>
  );
}
