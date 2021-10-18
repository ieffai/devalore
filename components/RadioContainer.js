import React from 'react';
import {View, StyleSheet} from 'react-native';
import {RadioBtn} from '.';

const RadioContainer = () => {
  return (
    <View style={styles.container}>
      <RadioBtn />
    </View>
  );
};

export default RadioContainer;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
