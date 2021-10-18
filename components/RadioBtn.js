import React, {useState} from 'react';
import RadioForm from 'react-native-simple-radio-button';

const RadioBtn = () => {
  const radio_props = [
    {label: 'Option 1', value: 0},
    {label: 'Option 2', value: 1},
  ];
  const [value, setValue] = useState(0);

  return (
    <RadioForm
      animation={true}
      radio_props={radio_props}
      initial={0}
      onPress={value => {
        setValue({value: value});
      }}></RadioForm>
  );
};

export default RadioBtn;
