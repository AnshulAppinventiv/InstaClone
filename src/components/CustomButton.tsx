import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppColors} from '../utils/Colors';
import {vw,vh} from '../utils/dimension';

interface CustomButtonProps {
  buttonTitle: string;
  onPress: () => void;
  disabled?: boolean;
}

const CustomButton = ({buttonTitle, onPress, disabled}:CustomButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={onPress} disabled={disabled}>
        <View
          style={[
            styles.button,
            {
              backgroundColor: disabled
                ? AppColors.BUTTON_DISABLED
                : AppColors.BUTTON,
            },
          ]}>
          <Text style={styles.textStyle}>{buttonTitle}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
  },
  button: {
    width:vw(343),
    height:vh(44),
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
    marginTop: vh(30),
  },
  textStyle: {
    color: 'white',
    paddingVertical: vh(12),
    fontSize: 18,
    textAlign: 'center',
  },
});
