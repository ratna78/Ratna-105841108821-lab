import React from "react";
import { View, Text, StyleSheet, Image, Button, Alert } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/*Header Text*/}
      <Text style={styles.headerText}>Facebook</Text>

      {/* Center Image */}
      <Image
        source={require('./fb.jpeg')}
        style={styles.image}
      />

      {/* Footer Buttons */}
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign In"
            onPress={() => Alert.alert('Sign In button clicked!')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            onPress={ () => Alert.alert('Login button clicked!')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  footer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginHorizontal: 10,
  },

})

export default App;