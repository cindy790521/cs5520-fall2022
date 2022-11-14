import { View, Text } from 'react-native';
import React from 'react';
import {auth} from '../firebase/firebase-setup';
import { SAMLAuthProvider } from 'firebase/auth';

export default function Profile() {
  return (
    <View>
      <Text>{auth.currentUser.email}</Text>
      <Text>{auth.currentUser.uid}</Text>
    </View>
  )
}