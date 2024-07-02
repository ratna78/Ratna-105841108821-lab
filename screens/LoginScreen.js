import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>

      <TextInput
        style={styles.input}
        placeholder='Name'
        value={email}
        onChange={setEmail}
        keyboardType="email-address"
        autoCapitalize='none'
      />

      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChange={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>Lupa password</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
         <TouchableOpacity onPress={() => console.log('Login with Google')}>
            <Image source={require('../assets/google.jpeg')} style={styles.logo} />
         </TouchableOpacity>
         <TouchableOpacity onPress={() => console.log('Login with Google')}>
            <Image source={require('../assets/fb.jpeg')} style={styles.logo} />
         </TouchableOpacity>
      </View>
    </View>
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
  
},
input: {
  width: '50%',
  padding: 20,
  marginBot: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
 

},
forgotPasswordText: {
  color: '#FF6600',
  fontSize: 16,
  marginBottom: 20,
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

export default LoginScreen;