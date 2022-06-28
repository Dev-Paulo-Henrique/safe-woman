import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Vibration } from 'react-native';
// import { WebView } from 'react-native-webview';
// import MapView, { Marker, Callout } from 'react-native-maps';
// import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

// import api from '../services/api';
// import { connect, disconnect, subscribeToNewDevs } from '../services/socket';
// import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import { signInWithRedirect, GoogleAuthProvider, getAuth } from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";


function Main({ navigation }) {
  // Initialize Firebase
  // const firebaseConfig = {
  //   apiKey: 'AIzaSyBl_xXu8vkF_z_Qs1pTYCAcOYUE2z_RO88',
  //   authDomain: 'safewoman22.firebaseapp.com',
  //   databaseURL: 'https://safewoman22-default-rtdb.firebaseio.com',
  //   projectId: 'safewoman22',
  //   storageBucket: 'safewoman22.appspot.com',
  //   messagingSenderId: '880829612224',
  //   appId: '1:880829612224:web:731b048d16e8c787da6d25',
  //   measurementId: 'G-R9NTPGP9KC',
  // };
  
  // initializeApp(firebaseConfig);
  
  // const provider = new GoogleAuthProvider();
  // const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // async function handleLoginWithGoogle(){
  //   await signInWithRedirect(auth, provider)
  // .then((result) => {
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   const user = result.user;
  //   console.log(token)

  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });
  // }

  return (
    <>
      <View style={styles.searchForm}>
        <Text style={styles.logo}>Safe Woman<Text style={{marginLeft: 1, color: '#D53F8C'}}>.</Text></Text>
        <TextInput 
          style={styles.searchInput}
          placeholder="E-mail"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
          selectionColor="#D53F8C"
        />
        <TextInput 
          style={styles.searchInput}
          placeholder="Senha"
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={password}
          onChangeText={setPassword}
          selectionColor="#D53F8C"
        />

        <View style={styles.buttons}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Map');
          Vibration.vibrate(100)
        }} style={styles.loadButton}>
          <FontAwesome name="sign-in" size={25} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.googleButton}>
          <AntDesign name="google" size={25} color="#FFF" />
        </TouchableOpacity>
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 53,
    fontWeight: 'bold',
    color: '#fff'
    // marginBottom: 20
  },

  searchForm: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    // top: 150,
    // left: 20,
    // right: 20,
    // flex: 1,
    padding: 22,
    width: '100%',
    height: '100%',
    backgroundColor: '#181b23'
    // zIndex: 5,
    // flexDirection: 'row',
  },

  searchInput: {
    // flex: 1,
    height: 50,
    // start: 1,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
    marginBottom: 20
  },

  buttons:{
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between'
  },

  loadButton: {
    width: '49%',
    height: 50,
    backgroundColor: '#D53F8C',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 15,
    marginBottom: 15
  },

  googleButton: {
    width: '49%',
    height: 50,
    // top: 250,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // marginLeft: 15,
    backgroundColor: '#db4a39'
  },
  
})

export default Main;