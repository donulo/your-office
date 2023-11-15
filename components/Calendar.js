import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Image, ViewStyle } from 'react-native';


export default function Calendar({ navigation }) {
  const [items, setItems] = useState({});
  const onChangeMail = (text) => { setValue(text) };
  const onChangePassword = () => { };
  
  return (
    <View style={styles.back}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.arrow}>
          <Image style={styles.imgarrow} source={require('../assets/arrow.png')} />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Settings')}>
        <View style={styles.settings}>
          <Image style={styles.imgsettings} source={require('../assets/settings.png')} />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.div}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
div: {
    height: '80%',
    width: '82%',
  },
imgarrow: {
    width: 18,
    height: 15,
  },
  imgsettings: {
    width: 26,
    height: 27,
  },
  arrow: {
    backgroundColor: '#577A6A',
    width: 45,
    height: 45,
    borderRadius: 25,
    position: 'absolute',
    left: 20,
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settings: {
    backgroundColor: '#577A6A',
    width: 45,
    height: 45,
    borderRadius: 25,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 20,
    top: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
back: {
    width: '100%',
    height: '100%',
    backgroundColor: '#8ACCB0',
    alignItems: 'center',
    justifyContent: 'center',
  },
})