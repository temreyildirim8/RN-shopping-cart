/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../types';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const Login: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = () => {
    if (!email || !validateEmail(email)) {
      setEmailError(true);
      return;
    }

    if (!password || password.length < 7) {
      setPasswordError(true);
      return;
    }

    // Perform login logic here
    navigation.replace('Home');
  };

  const validateEmail = (emailForTest: string) => {
    // A simple email validation function
    const re = /\S+@\S+\.\S+/;
    return re.test(emailForTest);
  };

  return (
    <View>
      <Text>App Title</Text>
      <TextInput placeholder="E-mail" onChangeText={setEmail} value={email} />
      {emailError && <Text style={{color: 'red'}}>Geçersiz e-mail</Text>}
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      {passwordError && <Text style={{color: 'red'}}>Geçersiz şifre</Text>}
      <TouchableOpacity onPress={handleLogin}>
        <Text>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
