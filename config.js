import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const firebaseConfig={
    apiKey: "AIzaSyBJNRldSc7mrH7fSPKSy1kKsWP2ALHnW3U",
  authDomain: "voice-journal-bdf0e.firebaseapp.com",
  projectId: "voice-journal-bdf0e",
  storageBucket: "voice-journal-bdf0e.appspot.com",
  messagingSenderId: "1153989480",
  appId: "1:1153989480:web:7fc598ffbb9208102934dd"
};

export default firebase.initializeApp(firebaseConfig);
