import React from 'react';
import Colors from '../utils/Colors';
import {Form, Header, Footer, ScreenContainer, Button} from '../components';
import {HEADER_TITLE, SUBMIT_BTN} from '../utils/constants';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {store} from '../redux/store';
import {isCounted} from '../redux/appSlice';
import {useSelector} from 'react-redux';

const PageSecond = () => {
  const counting = useSelector(state => state.app.successCounter);
  const submitBtnHandler = () => {
    store.dispatch(isCounted(true));
    alert(counting ? 'state is true' : 'state is false');
  };
  return (
    <ScrollView>
      <ScreenContainer>
        <Header title={HEADER_TITLE} />
        <Form />
        <Button
          text={SUBMIT_BTN}
          onPress={submitBtnHandler}
          buttonColor={Colors.greenSecondary}
          textColor={Colors.white}
        />
        <Footer />
      </ScreenContainer>
    </ScrollView>
  );
};

export default PageSecond;
const styles = StyleSheet.create({
  container: {},
});
