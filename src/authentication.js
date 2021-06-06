import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

export default function Authentication({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isBiometricSupported, setIsBiometricSupported] = React.useState(null);

  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      console.log('compatible', compatible);
      setIsBiometricSupported(compatible);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      console.log('isBiometricSupported', isBiometricSupported);
      if (isBiometricSupported == null) {
        return;
      }
      if (!isBiometricSupported) {
        setAuthenticated(true);
        return;
      }

      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics) {
        setAuthenticated(true);
        return;
      }

      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login com biometria',
        disableDeviceFallback: true,
      });

      console.log('biometricAuth', biometricAuth);
      if (biometricAuth?.success) {
        console.log('Autenticado!!');
        setAuthenticated(true);
      }
      if (
        biometricAuth?.warning?.startsWith(
          'Face ID is not available in Expo Go'
        )
      ) {
        setAuthenticated(true);
      }
    })();
  }, [isBiometricSupported]);

  return isAuthenticated ? (
    children
  ) : (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        resizeMode="contain"
        source={require('./assets/Logo-escuro.png')}
        style={{
          height: 150,
          width: 150,
        }}
      />
    </View>
  );
}
