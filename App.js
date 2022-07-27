import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Otp from './src';

export default function App() {
  return (
    <View style={styles.container}>
      <Otp/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
