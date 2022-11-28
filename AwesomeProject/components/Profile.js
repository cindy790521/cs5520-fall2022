import { View, Text } from 'react-native';
import React from 'react';
import {auth} from '../firebase/firebase-setup';
import { SAMLAuthProvider } from 'firebase/auth';
import LocationManager from './LocationManager.js'

export default function Profile({route}) {
  console.log('route.params@profile:',route.params);
  return (
    <View>
      <Text>{auth.currentUser.email}</Text>
      <Text>{auth.currentUser.uid}</Text>
      <LocationManager/>
    </View>
  )
}