import React from 'react';
import {View, Text, Button} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export default function HomePage({navigation}: Props) {
  const handleLogout = () => {
    // clear user data or token here
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Welcome to the Home Page</Text>
      <Button title="Log out" onPress={handleLogout} />
    </View>
  );
}
