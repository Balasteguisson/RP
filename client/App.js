import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

function LoginScreen() {
  const insets = useSafeAreaInsets();
  //
  return (
    <View style={{ flex: 1, paddingTop: insets.top, alignItems: 'center' }}>
      <View style={styles.formularyContainer}>
        <Text>Aquí va el formulario de login</Text>
        <Text>Hola!</Text>
      </View>
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


const styles = StyleSheet.create({
  formularyContainer: {
    flex: 1,
    backgroundColor: 'DarkCyan',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100
  }
})