import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
<<<<<<< HEAD
=======
import Otp from './src';
>>>>>>> b3aa7070856f93d0cc699a89c180a56c12b916ea
import AuthRoutes from './src/Auth/routes';

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      
=======
      <AuthRoutes/>
>>>>>>> b3aa7070856f93d0cc699a89c180a56c12b916ea
      
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
