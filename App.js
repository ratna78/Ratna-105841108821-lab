import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSignIn = () => {
    console.log('Name:', name);
    console.log('Email:', email);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <View style={styles.formContainer}>
        <TextInput
         style={[styles.input,{ marginTop: 20}]}
         placeholder='Name'
         value={name}
         onChangeText={setName}
         />
         <TextInput
          style={[styles.input, { marginTop: 20}]}
          placeholder='Email'
          value={email}
          onChangeText={setEmail}
          keyboardType='email-address'
          />
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        
        <View style={styles.socialContainer}>
          <Image source={require('./google.jpeg')} style={styles.logo}/>
          <Image source={require('./fb.jpeg')} style={styles.logo}/>
        </View>       
      </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: ' #fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
  },
  formContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '50%',
    
  },
  button: {
    backgroundColor: '#FF5722',
    padding: 5,
    borderRadius: 100,
    alignItems: 'center',
    marginBottom: 50,
    paddingHorizontal: 120,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 150,
  },
  logo: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
  },
})

export default App;