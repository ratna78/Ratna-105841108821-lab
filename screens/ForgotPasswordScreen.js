import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');

  const handleSendEmail = () => {
    if (isValidEmail(email)) {

      console.log('Send email to:', email);
      Alert.alert('Email terkirim!', 'Cek email Anda untuk instruksi selanjutnya.');
    } else{
      Alert.alert('email tidak valid', 'Pastikan format email Anda benar.');
    }
    };

    const isValidEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
    };

    return (
      <View style={styles.container}>
      <Text style={styles.title}>Forgot Password Screen</Text>

      <TextInput
        style={styles.input}
        placeholder='Masukkan email Anda'
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize='none'
      />
      
         <TouchableOpacity style={styles.sendButton} onPress={handleSendEmail}>
            <Text style={styles.sendButtonText}>Kirim</Text> 
         </TouchableOpacity>

         {!isValidEmail(email) && (
          <Text style={styles.errorText}>Pastikan format email Anda benar.</Text>
         )}
      
    </View>
  );
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
sendButton: {
  paddingHorizontal: 24,
  alignItems: 'center',
  paddingVertical: 12,
  backgroundColor: '#FF6600',
  borderRadius: 5,


},
forgotPasswordText: {
  color: 'white',
  fontSize: 16,
  


},
errorText: {
  color: 'red',
  marginTop: 10,

},



});

export default ForgotPasswordScreen;
   