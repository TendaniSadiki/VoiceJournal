import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AuthRoutes from './src/Auth/routes';

export default function App() {
  return (
    <View style={styles.container}>
      
      
      <StatusBar style="auto" />
      <AuthRoutes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
});
