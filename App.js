import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

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
      <View style={styles.back}>
        <View style={styles.cycle}>
          <Image source={require('./assets/logo.png')} style={styles.img}/>
        </View>
        <Text style={styles.text}>Твой умный офис</Text>
        <TouchableWithoutFeedback>
          <View style={styles.button}><Text style={styles.textButton}>Вход</Text></View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback>
          <View style={styles.button}><Text style={styles.textButton}>Регистрация</Text></View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
  else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError />
    );
  }
}

const styles = StyleSheet.create({
  img:{
    top: 40,
    width: 250,
    height: 250,
  },
  cycle: {
    backgroundColor: '#222222',
    color: '#222222',
    width: '130%',
    height: 550,
    borderWidth: 1,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
    top: -160,
  },
  back: {
    width: '100%',
    height: '100%',
    backgroundColor: '#8ACCB0',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'mt-bold',
  },
  button:{
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '82%',
    backgroundColor: '#222222',
    borderRadius: 13,
    height: 55,
  },
  textButton:{
    color: 'white',
    fontSize: 18,
    fontFamily: 'mt-semibold',
  },
});
