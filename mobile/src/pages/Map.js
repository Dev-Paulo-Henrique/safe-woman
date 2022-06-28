import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { WebView } from 'react-native-webview';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import api from '../services/api';
import { connect, disconnect, subscribeToNewDevs } from '../services/socket';

function Map({ navigation }) {
  const [devs, setDevs] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);
  const [techs, setTechs] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestForegroundPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }

    loadInitialPosition();
  }, []);

  useEffect(() => {
    subscribeToNewDevs(dev => setDevs([...devs, dev]));
  }, [devs]);

  function setupWebsocket() {
    disconnect();

    const { latitude, longitude } = currentRegion;

    connect(
      latitude,
      longitude,
      techs,
    );
  }

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    // const alerta = Alert.alert(
    //   "Buscando informações",
    //   "Aguarde um pouco...",
    //   [
    //     { text: "OK", onPress: () => console.log("OK Pressed") }
    //   ]
    // );

    // if(!response){
    //   alerta
    // }else{
    //   alerta
    // }

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs
      }
    });
    
    
    setDevs(response.data.devs);
    setOpen(false)
    setupWebsocket();
  }

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>
        {/* <WebView style={{ flex: 1, marginTop: -120, marginBottom: -50 }} source={{ uri: `https://www.google.com.br/maps/search/policia/@-8.1152326,-34.961676,18z` }}/> */}
      {/* <MapView 
        onRegionChangeComplete={handleRegionChanged} 
        initialRegion={currentRegion} 
        style={styles.map}
      >
        {devs.map(dev => (
          <Marker 
            key={dev._id}
            coordinate={{ 
              longitude: dev.location.coordinates[0],
              latitude: dev.location.coordinates[1], 
            }}
          >
            <Image 
              style={styles.avatar} 
              source={{ uri: dev.avatar_url }}
            />

            <Callout onPress={() => {
              navigation.navigate('Profile', { github_username: dev.github_username });
            }}>
              <View style={styles.callout}>
                <Text style={styles.devName}>{dev.name}</Text>
                <Text style={styles.devBio}>{dev.bio}</Text>
                <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView> */}
      <View style={styles.searchForm}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Buscar usuárias..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
          selectionColor="#D53F8C"
        />

        <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
          <MaterialIcons name="search" size={25} color="#FFF" />
        </TouchableOpacity>

        <View style={styles.user}>
        {devs.map(dev => (
          <View 
          key={dev._id}
            // coordinate={{ 
            //   longitude: dev.location.coordinates[0],
            //   latitude: dev.location.coordinates[1], 
            // }}
          >
            <TouchableOpacity 
            // onPress={() => {open ? setOpen(false) : setOpen(true)}}
            onPress={() => {
              navigation.navigate('Profile', { github_username: dev.github_username });
            }}
            >
            <Image 
              style={styles.avatar} 
              source={{ uri: dev.avatar_url }}
            />
        </TouchableOpacity>

            {/* {open && <TouchableOpacity>
              <View style={styles.callout}>
                <Text style={styles.devName}>{dev.name}</Text>
                <Text style={styles.devBio}>{dev.bio}</Text>
                <View style={{display: "flex", flexDirection:'row', justifyContent: "space-between", alignItems: "center"}}>
                <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
                <FontAwesome name="whatsapp" size={25} color="#34af23"  onPress={() => {
              navigation.navigate('Profile', { github_username: dev.github_username });
            }}/>
                </View>
              </View>
            </TouchableOpacity>} */}
          </View>
        ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 25,
    marginRight: 20,
    borderColor: '#FFF'
  },
  
  user:{
    // flex: 1,
    width: 200,
    height: "auto",
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
    // backgroundColor: '#D53F8C',
    borderRadius: 25,
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'absolute',
    top: 60
  },

  callout: {
    width: 320,
    height: "auto",
    backgroundColor: "#fff",
    borderRadius: 4,
    marginTop: 10,
    padding: 10
  },
  
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  
  devBio: {
    color: '#666',
    marginTop: 5,
  },

  devTechs: {
    marginTop: 5,
  },
  
  searchForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row'
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#FFF',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 2,
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#D53F8C',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
})

export default Map;