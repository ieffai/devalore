import React from 'react';
import {StyleSheet, TextInput, View, Text, Image} from 'react-native';
import useToggle from '../utils/Hooks/useToggle';
import Colors from '../utils/Colors';

const Input = ({
  wrapperStyle,
  value,
  borderColor = Colors.graySecondary,
  setter,
  placeholder,
  focusedBorderColor = Colors.greenSecondary,
  ...textInputProps
}) => {
  const [isFocused, toggleFocused] = useToggle();
  return (
    <View
      style={[
        styles.textInputWrapper,
        borderColor && {borderColor: borderColor},
        isFocused && {borderColor: focusedBorderColor},
        wrapperStyle,
      ]}>
      <TextInput
        {...textInputProps}
        value={value}
        onChangeText={text => setter(text)}
        onFocus={toggleFocused}
        onBlur={toggleFocused}
        placeholder={placeholder}
        placeholderTextColor={Colors.graySecondary}
        style={styles.textInput}
        {...textInputProps}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: Colors.greenSecondary,
    fontSize: 16,
    height: '100%',
  },
  textInputWrapper: {
    width: 200,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 24,
    height: 48,
    marginLeft: 20,
  },
});
