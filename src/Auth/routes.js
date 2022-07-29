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