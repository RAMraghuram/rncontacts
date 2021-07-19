import React, {useState} from 'react';
import Input from '../../components/common/Input';
import Container from '../../components/common/Container';
import {Text} from 'react-native';

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
    </Container>
  );
};

export default Login;
