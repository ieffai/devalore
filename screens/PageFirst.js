import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {ScreenContainer, Button, Footer} from '../components';
import {PAGE_2_ROUTE} from '../routes/constants';
import Colors from '../utils/Colors';
import {MAIN_BTN_TEXT, MAIN_H1} from '../utils/constants';

const PageFirst = () => {
  const navigation = useNavigation();
  const mainBtnHandler = () => {
    navigation.push(PAGE_2_ROUTE);
  };
  return (
    <ScreenContainer>
      <Text style={styles.text}>{MAIN_H1}</Text>
      <Button
        text={MAIN_BTN_TEXT}
        onPress={mainBtnHandler}
        buttonColor={Colors.purple}
        textColor={Colors.white}
      />
      <Footer />
    </ScreenContainer>
  );
};

export default PageFirst;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    paddingHorizontal: 50,
    marginTop: 150,
    marginBottom: 150,
    textAlign: 'center',
  },
});
