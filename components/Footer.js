import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COPYRIGHT} from '../utils/constants';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontSize: 18, marginTop: 250}]}>
        {COPYRIGHT}
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  text: {
    fontSize: 25,

    textAlign: 'center',
  },
});
