import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

function SignInScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In Screen</Text>

      <TextInput
        style={styles.input}
        placeholder='Name'
        value={name}
        onChange={setName}
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
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>Siap punya akun</Text>
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
signUpText: {
  marginTop: 10,
  marginBottom: 20,
  color: 'black',

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

export default SignInScreen;