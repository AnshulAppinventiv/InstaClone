import {StyleSheet, Text, TextInput, View, TextInputProps} from 'react-native';
import React from 'react';
import {vw, vh} from '../utils/dimension';

interface InputBoxProps {
  placeholder: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  value?: string;
  style?: object;
  maxLength?: number;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps['keyboardType'];
  touched?: any;
  errors?: string;
}
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
}: InputBoxProps) => {
  return (
    <>
      <View style={style}>
        <TextInput
          style={styles.inputText}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          maxLength={maxLength}
          placeholderTextColor={'grey'}
          autoCapitalize={'none'}
        />
      </View>
      {errors && touched && <Text style={styles.errorMsg}>{errors}</Text>}
    </>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  mainContainer: {},

  inputText: {
    width: vw(300),
    height: vh(44),
    fontSize: vw(16),
  },
  errorMsg: {
    color: 'red',
    paddingLeft: vw(5),
  },
});
