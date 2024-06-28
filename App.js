// Rest of the import statements
import { useFonts } from 'expo-font';
import {Text, View } from 'react-native';

export default function App() {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
    'MetroSemiBold': require('./assets/fonts/Metropolis-SemiBold.otf'),
  });

  if(!dapatFont) {
    return <Text>Font tidak dutemukan</Text>

  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{ fontFamily: 'MetroBlack' }}>Font Metropolis Black</Text>
      <Text style={{ fontFamily: 'MetroBold' }}>Font Metropolis Bold</Text>
      <Text style={{ fontFamily: 'MetroLight' }}>Font Metropolis Light</Text>
      <Text style={{ fontFamily: 'MetroMedium' }}>Font Metropolis Medium</Text>
      <Text style={{ fontFamily: 'MetroSemiBold' }}>Font Metropolis SemiBold</Text>
      <Text>Font Biasa</Text>
    </View>
  )
}
