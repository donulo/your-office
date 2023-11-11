import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Image } from 'react-native';
import { seperatorStyles } from './seperatorStyles';


export default function Settings({ navigation }) {
    const [text, setValue] = useState('');
    const onChangeMail = (text) =>{ setValue(text)};
    const onChangePassword = () =>{};
    return (
        <View style={styles.back}>
            <TouchableWithoutFeedback>
            <View style={styles.arrow}>
              <Image style={styles.imgarrow} source={require('../assets/burger.png')} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.settings}>
              <Image style={styles.imgsettings} source={require('../assets/settings.png')} />
            </View>
          </TouchableWithoutFeedback>
        </View>
    );
}
const styles = StyleSheet.create({
    imgarrow:{
        width: 30,
        height: 22,
      },
      imgsettings:{
        width: 27,
        height: 27.76,
      },
      arrow:{
        backgroundColor: '#577A6A',
        width: 48,
        height: 48,
        borderRadius: 25,
        position: 'absolute',
        left:20,
        top: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      settings:{
        backgroundColor: '#577A6A',
        width: 48,
        height: 48,
        borderRadius: 25,
        position: 'absolute',
        alignSelf: 'flex-end',
        right: 20,
        top: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
    back:{
      width: '100%',
      height: '100%',
      backgroundColor: '#8ACCB0',
      alignItems: 'center',
      justifyContent: 'center',
    },
});