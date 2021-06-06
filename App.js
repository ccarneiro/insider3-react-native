import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import Authentication from './src/authentication';

export default function App() {
  return (
    <NavigationContainer>
      <Authentication>
        <Routes />
      </Authentication>
    </NavigationContainer>
  );
}
