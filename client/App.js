import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

function LoginScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text>Aquí va el formulario de login</Text>
      <Text>Aquí va el boton de login</Text>
    </View>
  )
}


export default function App() {

  return (
    <SafeAreaProvider>
      <LoginScreen></LoginScreen>
    </SafeAreaProvider>

  );
}
