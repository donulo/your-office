import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Image } from 'react-native';


export default function SignUp({ navigation }) {
    const [text, setValue] = useState('');
    const onChangeMail = (text) =>{ setValue(text)};
    const onChangePassword = () =>{};
    return (
        <View style={styles.back}>
        <View style={styles.circle}>
           <View style={styles.textInCircle}>
              <Text style={styles.texth1}>Регистрация</Text>
              <Text style={styles.texth2}>Зарегистрируйтесь через почту и введите номер, данный организацией, чтобы дальше использовать приложение</Text>
           </View>     
        </View>
        <View style={styles.div}>
          <View style={styles.inputFields}>
            <View style={styles.input}><TextInput style={styles.TextInput} maxLength={30} pointerEvents="box-only" placeholder="Номер"/></View>
            <View style={styles.input}><TextInput style={styles.TextInput} maxLength={30} pointerEvents="box-only" placeholder="Почта"/></View>
            <View style={styles.password}>
                <TextInput style={styles.TextInput} maxLength={30} secureTextEntry={true} placeholder="Придумайте пароль"/>
                <Image style={styles.img} source={require('../assets/eye1.png')} />
            </View>
            <View style={styles.password}>
                <TextInput style={styles.TextInput} maxLength={30} secureTextEntry={true} placeholder="Повторите пароль"/>
                <Image style={styles.img} source={require('../assets/eye1.png')} />
            </View>
          </View>
          <View style={styles.inputFields}>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Map')}>
                <View style={styles.button}><Text style={styles.textButton}>Зарегистрироваться</Text></View>
            </TouchableWithoutFeedback>
            <Text style={styles.texth4}>Уже есть аккаунт?</Text>  
            <TouchableWithoutFeedback onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.texth4}>Войти</Text>            
            </TouchableWithoutFeedback>
          </View>
        </View >
    </View>
    );
}
const styles = StyleSheet.create({
  TextInput:{
    color: '#222222',
    fontSize: 16,
    fontFamily: 'mt-regular',
    letterSpacing: 2,    
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
    height: 60,
    borderRadius: 13,
    borderColor: 'black',
  },
    img:{
      position: 'absolute',
      width: 25,
      height: 22,
      left: '85%',
      alignSelf: 'center',
    },
    password:{
      width: '100%',
      height: 60,
      borderRadius: 13,
      backgroundColor: 'rgba(255, 255, 255, 0.45)',
      borderColor: '#222222',
      borderWidth: 2,
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    texth6: {
      color: '#222222',
      fontSize: 16,
      fontFamily: 'mt-regular',   
      letterSpacing: 2,
    },
    button: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: '82%',
      backgroundColor: '#222222',
      borderRadius: 13,
      height: 55,
      marginBottom: 10,
    },
    textButton: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'mt-regular',
    },
    inputFields:{
      marginTop: 20,
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
        marginBottom: 20,
        justifyContent: 'center'
    },
    textInCircle:{
      width: '80%',
    },
    div:{
      width: '82%',
      height: '60%',
      alignItems: 'center',
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
      fontSize: 44,
      fontFamily: 'mt-regular',
      marginBottom: 20,
    },
    texth2:{
      color: 'white',
      fontSize: 14,
      fontFamily: 'mt-regular',
      letterSpacing: 2,
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