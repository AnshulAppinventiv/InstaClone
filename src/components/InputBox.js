import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import { vw,vh } from '../utils/dimension';

const InputBox = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  style,
  maxLength,
  secureTextEntry,
  keyboardType,
  touched,
  errors,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={style}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        secureTextEntry={secureTextEntry}
        touched={touched}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
      {errors && touched && <Text style={styles.errorMsg}>{errors}</Text>}
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  mainContainer: {
    height: vw(50),
    marginTop:vh(14),
  },

  errorMsg: {
    color: 'red',
    paddingLeft: vw(5),
  },
});
