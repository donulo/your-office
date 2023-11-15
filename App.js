import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import MainStack from './navigate';

const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-italic': require('./assets/fonts/Montserrat-Italic.ttf'),
  'mt-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  'mt-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
  'mt-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'ko-regular': require('./assets/fonts/KronaOne-Regular.ttf')
})

export default function App() {
  const [font, setFont] = useState(false);
  if (font) {
    return (
      <MainStack></MainStack>
    );
  }
  else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError />
    );
  }
};
