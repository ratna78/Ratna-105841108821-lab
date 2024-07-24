import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const LoginSimak = () => {
  const [data, setData] = useState({
    nim: '',
    password: ''
  });
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const onSubmit = () => {
    axios.post('https://api.beasiswa.unismuh.ac.id/api/login', {
      username: data.nim,
      password: data.password
    })
      .then(response => {
        if (response.status === 200) {
          setUserData(response.data.data);
          setError('');
        }
      })
      .catch(error => {
        console.log(error);
        setError('Ada kesalahan. Silahkan cek kembali nim dan password anda.');
        setUserData(null);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setData({ ...data, nim: value })}
          placeholder="Nim"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          onChangeText={(value) => setData({ ...data, password: value })}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />
        <Button title="Login" onPress={onSubmit} />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      {userData && (
        <View style={styles.userDataContainer}>
          <Text style={styles.userDataText}>ID: {userData.id}</Text>
          <Text style={styles.userDataText}>Username: {userData.username}</Text>
          <Text style={styles.userDataText}>Name: {userData.nama}</Text>
          <Text style={styles.userDataText}>Role: {userData.role}</Text>
          <Image
            style={styles.userImage}
            source={{ uri: https://simakad.unismuh.ac.id/upload/mahasiswa/${userData.username}.jpg }}
          />
        </View>
    
    </View>
  );
}

export default LoginSimak;