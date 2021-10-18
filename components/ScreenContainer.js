import React from 'react';
import {View, StyleSheet} from 'react-native';

const ScreenContainer = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
