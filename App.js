import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const App = () => {
  return (
    <View style={{flex: 1,
    }}>
      <View style={{ flex: 1, flexDirection:'row', backgroundColor: 'black'}}>
        <View style={{ flex: 1, backgroundColor: 'black'}}>
        </View>
        <View style={{ flex : 1,  backgroundColor: 'green'}}>
        </View>
      </View>
        <View style={{ flex: 1, backgroundColor: 'brown'}}>
      </View>
      <View style={{ flex: 1, backgroundColor: 'blue'}}>
      </View>
    </View>
  )
}

export default App;