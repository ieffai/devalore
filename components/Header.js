import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Header = props => {
  const {title} = props;
  return <Text style={styles.text}>{title}</Text>;
};

export default Header;

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
  },
});
