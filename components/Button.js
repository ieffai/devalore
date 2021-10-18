import React from 'react';
import {Text} from 'react-native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../utils/Colors';

const Button = ({
  onPress,
  text,
  textColor,
  disabled = false,
  buttonColor,
  isFlash,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.button,
        buttonColor && {backgroundColor: buttonColor},
        disabled && {backgroundColor: Colors.graySecondary},
        isFlash && {maxWidth: 150},
      ]}
      onPress={onPress}>
      <Text
        style={[styles.text, textColor && {color: textColor}]}
        numberOfLines={1}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    alignSelf: 'center',
    height: 48,
    maxHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: 296,
  },
  text: {
    fontSize: 20,
  },
});
