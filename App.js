import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font'

function SignInScreen({ navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIGN IN</Text>

      <TextInput
        style={styles.input}
        placeholder='Name'
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChange={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
      />

      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChange={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signUpButtonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
         <TouchableOpacity onPress={() => console.log('Login with Google')}>
            <Image source={require('./assets/google.jpeg')} style={styles.logo} />
         </TouchableOpacity>
         <TouchableOpacity onPress={() => console.log('Login with Facebook')}>
            <Image source={require('./assets/fb.jpeg')} style={styles.logo} />
         </TouchableOpacity>
      </View>
    </View>
  );
}

function SignUpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up Screen</Text>
    </View>
  )
}

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync( {
      'Metropolis-Bold': require('./assets/fonts/Metropolis-Bold.otf'),
      'Metropolis-Medium': require('./assets/fonts/Metropolis-Medium.otf'),
    })
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{
          headerTitleStyle: {
            fontFamily: 'Metropolis-Bold',
          },
        }}
        >
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: 'Sgin In',
            }}
          />
          <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  padding: 16,
},
title: {
  fontSize: 24,
  marginBottom: 20,
  fontFamily: 'Metropolis-Bold',
},
input: {
  width: '50%',
  padding: 20,
  marginBot: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  fontFamily: 'Metropolis-Medium',
},
signUpText: {
  marginTop: 10,
  marginBottom: 20,
  color: 'black',
  fontFamily: 'Metropolis-Medium',
},
signUpButton: {
  backgroundColor: '#FF6600',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 5,
},
signUpButtonText: {
  color: 'white',
  fontSize: 16,
  textAlign: 'center',
  fontFamily: 'Metropolis-Bold',
},
logoContainer: {
  flexDirection: 'row',
  marginTop: 20,
},
logo: {
  width: 50,
  height: 50,
  marginHorizontal: 10,
},
});


