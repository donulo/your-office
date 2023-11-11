import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Image } from 'react-native';

export default function Settings({ navigation }) {
  const [text, setValue] = useState('');
  const onChangeMail = (text) => { setValue(text) };
  const onChangePassword = () => { };
  return (
    <View style={styles.back}>
      <View style={styles.div}>
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles.arrow}>
            {/* <Image style={styles.imgarrow} source={require('../assets/arrow.png')} /> */}
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.cycle}>
          {/* <Image style={styles.img} source={require('../assets/logo.png')} /> */}
        </View>
      </View>
      <View style={styles.div1}>
        <View style={styles.block}>
          <View style={styles.forimages}></View>
          <Text style={styles.texth1}>Конструктор</Text>
        </View>
        <View style={styles.block}>
          <View style={styles.forimages}></View>
          <Text style={styles.texth1}>Уведомления</Text>
        </View>
        <View style={styles.block}>
          <View style={styles.forimages}></View>
          <Text style={styles.texth1}>Статистика</Text>
        </View>
        <View style={styles.block}>
          <View style={styles.forimages}></View>
          <Text style={styles.texth1}>Помощь</Text>
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Main')}>
          <Text style={styles.text}>Выйти из аккаунта</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  texth1: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'mt-regular',
  },
  forimages: {
    width: 60,
    height: '100%',

  },
  block: {
    width: '100%',
    height: 60,
    backgroundColor: '#3B5247',
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#3B5247',
    fontSize: 18,
    fontFamily: 'mt-medium',
  },
  imgarrow: {
    width: 30,
    height: 22,
  },
  arrow: {
    backgroundColor: '#577A6A',
    width: 48,
    height: 48,
    borderRadius: 25,
    position: 'absolute',
    left: 20,
    top: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    width: '100%',
    alignItems: 'center',
  },
  div1: {
    height: '50%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  img: {
    top: 40,
    width: 250,
    height: 250,
    top: -30,
  },
  cycle: {
    backgroundColor: '#222222',
    color: '#222222',
    width: '130%',
    height: 390,
    borderWidth: 1,
    borderBottomLeftRadius: 390,
    borderBottomRightRadius: 390,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: '100%',
    height: '100%',
    backgroundColor: '#8ACCB0',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});