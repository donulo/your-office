import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';


export default function SignIn() {
    const [text, setValue] = useState('');
    const onChangeMail = (text) =>{ setValue(text)};
    const onChangePassword = () =>{};
    return (
        <View style={styles.back}>
        <View style={styles.circle}>
           <View style={styles.textInCircle}>
              <Text style={styles.texth1}>Вход</Text>
              <Text style={styles.texth2}>Войдите, чтобы дальше использовать приложение</Text>
           </View>     
        </View>
        <View style={styles.div}>
          <View style={styles.inputFields}>
            <View style={styles.input}></View>
            <View style={styles.input}></View>
            <Text style={styles.texth3}>Забыли пароль?</Text>
          </View>
          <View style={styles.inputFields}>
            <TouchableWithoutFeedback>
                <View style={styles.button}><Text style={styles.textButton}>Войти</Text></View>
            </TouchableWithoutFeedback>
            <Text style={styles.texth4}>Ещё нет акаунта?</Text>  
            <TouchableWithoutFeedback>
                <Text style={styles.texth4}>Зарегистрироваться</Text>            
            </TouchableWithoutFeedback>
          </View>
        </View >
    </View>
    );
}

const styles = StyleSheet.create({
    button: {
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center',
      width: '82%',
      backgroundColor: '#222222',
      borderRadius: 13,
      height: 60,
      marginBottom: 10,
    },
    textButton: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'mt-regular',
    },
    inputFields:{
      width: '100%',
      alignItems: 'center',
      textAlignVertical: 'center',
    },
    input:{
      width: '100%',
      height: 60,
      borderRadius: 13,
      backgroundColor: 'rgba(255, 255, 255, 0.45)',
      borderColor: '#222222',
      borderWidth: 2,
      marginBottom: 25,
    },
    textInCircle:{
      width: '80%',
    },
    div:{
      width: '82%',
      height: '50%',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 55,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    circle:{
      backgroundColor: '#222222',
      color: '#222222',
      width: '106%',
      height: 250,
      borderWidth: 1,
      borderBottomLeftRadius: 52,
      borderBottomRightRadius: 52,
      alignItems: 'center',
      justifyContent: 'center',
    },
    texth1:{
      color: 'white',
      fontSize: 46,
      fontFamily: 'mt-regular',
      marginBottom: 20,
    },
    texth2:{
      color: 'white',
      fontSize: 14,
      fontFamily: 'mt-regular',
      letterSpacing: 2,
    },
    texth3:{
      color: 'black',
      fontSize: 15,
      fontFamily: 'mt-regular',
    },
    texth4:{
      color: '#2C3E36',
      fontSize: 15,
      fontFamily: 'mt-semibold',
      textAlignVertical: 'center',
    },
    back:{
      width: '100%',
      height: '100%',
      backgroundColor: '#8ACCB0',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });