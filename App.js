import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.back}>
        <View style={styles.cycle}>

        </View>
        <Text style={styles.text}>Твой умный офис</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cycle:{
    backgroundColor: '#222222',
    color: '#222222',
    width: '130%',
    height: 550,
    borderWidth: 1,
    borderRadius: 500,
    top: -120,
  },
  back:{
    width: '100%',
    height: '100%',
    backgroundColor: '#8ACCB0',
    alignItems: 'center',
  },
  text:{
    color: 'black',
    fontSize: 30,
    fontFamily: 'Montserrat Bold',
  },
});
