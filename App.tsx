import React, {useState, useEffect} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AppContext from './context/AppContext';
import Products from './pages/Products/Products';

const Stack = createStackNavigator();

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const asyncStorage = useAsyncStorage('userToken');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    asyncStorage
      .getItem()
      .then(token => {
        if (token) {
          setLoggedIn(true);
        }
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = () => {
    if (!validateEmail(email)) {
      setEmailError(true);
    } else if (password.length < 7) {
      setPasswordError(true);
    } else {
      asyncStorage
        .setItem('userTokenValue')
        .then(() => setLoggedIn(true))
        .catch(error => console.log(error));
    }
  };

  const handleLogout = () => {
    asyncStorage
      .removeItem()
      .then(() => setLoggedIn(false))
      .catch(error => console.log(error));
  };

  const validateEmail = (emailForTest: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(emailForTest);
  };

  return (
    <AppContext.Provider value={{loggedIn}}>
      <NavigationContainer>
        {loggedIn ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Products"
              component={Products}
              options={{
                title: 'Ürün Listesi',
                // eslint-disable-next-line react/no-unstable-nested-components
                headerRight: () => (
                  <TouchableOpacity onPress={handleLogout}>
                    <Text>Çıkış Yap</Text>
                  </TouchableOpacity>
                ),
              }}
            />
            {/* <Stack.Screen name="Cart" component={Cart} /> */}
          </Stack.Navigator>
        ) : (
          <View>
            <Text>TIKLA GELSİN</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="E-posta"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            {emailError && <Text>Geçersiz e-mail</Text>}
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Şifre"
              secureTextEntry
            />
            {passwordError && <Text>Geçersiz şifre</Text>}
            <TouchableOpacity
              onPress={handleLogin}
              disabled={!validateEmail(email) || password.length < 7}>
              <Text>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        )}
      </NavigationContainer>
    </AppContext.Provider>
  );
};

export default App;
