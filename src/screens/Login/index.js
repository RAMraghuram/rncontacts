import React, {useState} from 'react';
import Input from '../../components/common/Input';
import Container from '../../components/common/Container';
import {Text} from 'react-native';
import CustomButton from '../../components/common/CustomButton';

const Login = () => {
  const [value, onChangeText] = useState('');
  return (
    <Container>
      <Input
        label="UserName"
        onChangeText={text => onChangeText(text)}
        value={value}
        // error={'This is required field.'}
        iconPosition="right"
      />
      <Input
        label="Password"
        onChangeText={text => onChangeText(text)}
        value={value}
        icon={<Text>Hide</Text>}
        iconPosition="right"
      />

      <CustomButton secondary title="Submit" loading={true} disabled={true} />
      <CustomButton secondary title="Submit" loading={true} />
      <CustomButton primary title="Submit" loading={true} disabled={true} />
      <CustomButton danger title="Submit" loading={true} />
    </Container>
  );
};

export default Login;
