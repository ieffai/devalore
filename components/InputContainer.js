import React from 'react';
import {StyleSheet, View} from 'react-native';

const InputContainer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default InputContainer;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
