
import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const App = () => {

  const TextInputCustom = ({name, color}) => {
  return (
   
       <TextInput
        placeholder={`Masukkan ${name}`}
        
        style={{
          height: 40,
          width: 200,
          borderColor: 'gray',
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
          borderRadius: 10,
          paddingLeft: 10,
          color: color,

        }}
     />
      
    
     
  )
  }
  return(
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <TextInputCustom name="Username" color="balck"/>
      <TextInputCustom name="Password" color="red" />
    </View>
  )
}

export default App;