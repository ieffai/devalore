import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, RadioContainer, InputContainer} from '.';

const Form = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const messageSetter = value => {
    if (value.length <= 25) setMessage(value);
  };

  return (
    <View style={styles.container}>
      <InputContainer>
        <Text style={styles.inputTitle}> Text </Text>
        <Input
          placeholder="place your message here"
          value={message}
          setter={messageSetter}
          maxLength={25}
        />
      </InputContainer>

      <InputContainer>
        <Text style={styles.inputTitle}> Email </Text>
        <Input
          placeholder="we NEED your email"
          value={email}
          setter={value => setEmail(value)}
        />
      </InputContainer>

      <InputContainer>
        <Text style={styles.inputTitle}> Number </Text>
        <Input
          placeholder="...and your number"
          value={number}
          keyboardType="number-pad"
          setter={value => {
            const onlyNumeric = /[^0-9]/g;
            setNumber(value.replace(onlyNumeric, ''));
          }}
        />
      </InputContainer>

      <RadioContainer />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  inputTitle: {
    fontSize: 20,
    marginRight: 20,
  },
});
