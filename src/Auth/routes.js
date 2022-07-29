<<<<<<< HEAD
// import NavigationContainer from 'react-native-navigation-container';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Home';
import Otp from '../index'
import firebase from 'firebase/compat'
import { firebaseConfig } from '../../config';
import React, { useState } from 'react';

const Stack = createNativeStackNavigator();

const AuthRoutes = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false)

=======
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home';
import Otp from '../index'
import firebase from 'firebase/app';
import "firebase/auth";


const AuthRoutes = () =>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  const firebaseConfig = {
    apiKey: "AIzaSyBJNRldSc7mrH7fSPKSy1kKsWP2ALHnW3U",
    authDomain: "voice-journal-bdf0e.firebaseapp.com",
    projectId: "voice-journal-bdf0e",
    storageBucket: "voice-journal-bdf0e.appspot.com",
    messagingSenderId: "1153989480",
    appId: "1:1153989480:web:7fc598ffbb9208102934dd"
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
>>>>>>> d9adcd1ee432730cfe4fc68f4aa7c64c6496d9f8

  firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });
      return(
        <NavigationContainer>
        {isLoggedIn 
        ?
         <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator> :
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Otp} options={{ headerShown: false }} />
          </Stack.Navigator>}
      </NavigationContainer>
      )
    };
    export default AuthRoutes;