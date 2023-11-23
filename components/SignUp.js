import React, { useState, setState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';


export default function SignUp({ navigation }) {
    const [seePassword, setSeePassword] = useState(true);
    const [seeConfirmPassword, setSeeConfirmPassword] = useState(true); 
    return (
        <View style={styles.back}>
        <View style={styles.circle}>
           <View style={styles.textInCircle}>
              <Text style={styles.texth1}>Регистрация</Text>
              <Text style={styles.texth2}>Зарегистрируйтесь через почту и введите номер, данный организацией, чтобы дальше использовать приложение</Text>
           </View>     
        </View>
        <View style={styles.div}>
          <ScrollView style={styles.scroll}>
            <View style={styles.inputFields}>
              <View style={styles.input}><TextInput style={styles.TextInput} maxLength={30} pointerEvents="box-only" placeholder="Номер"/></View> 
              <View style={styles.input}><TextInput style={styles.TextInput} maxLength={30} pointerEvents="box-only" placeholder="Почта"/></View>
              <View style={[styles.password, {marginBottom: 20,}]}>
                  <TextInput style={[styles.TextInput, {paddingRight: 50, }]} maxLength={20} secureTextEntry={seePassword} placeholder="Придумайте пароль"/>
                  <TouchableWithoutFeedback onPress={() => setSeePassword(!seePassword)}>
                    <Image style={styles.img} source={seePassword ? require('../assets/eyeclose.png') : require('../assets/eye.png')} />
                  </TouchableWithoutFeedback>
              </View>
              <View style={styles.password}>
                  <TextInput style={[styles.TextInput, {paddingRight: 50}]} maxLength={20} secureTextEntry={seeConfirmPassword} placeholder="Повторите пароль"/>
                  <TouchableWithoutFeedback onPress={() => setSeeConfirmPassword(!seeConfirmPassword)}>
                    <Image style={styles.img} source={ seeConfirmPassword ? require('../assets/eyeclose.png') : require('../assets/eye.png')} />
                  </TouchableWithoutFeedback>
              </View>
            </View>
          </ScrollView>
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
  scroll:{
    width: '100%',
    marginTop: 20,
  },
  TextInput:{
    color: '#222222',
    fontSize: 16,
    fontFamily: 'mt-regular',
    letterSpacing: 2,    
    paddingLeft: 20,
    paddingRight: 20,
    width: '100%',
    height: 60,
    borderRadius: 13,
    borderColor: 'black',
  },
    img:{
      position: 'absolute',
      width: 21,
      height: 22,
      left: '87%',
      alignSelf: 'center',
    },
    password:{
      width: '100%',
      height: 60,
      borderRadius: 13,
      backgroundColor: 'rgba(255, 255, 255, 0.45)',
      borderColor: '#222222',
      borderWidth: 2,
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
      backgroundColor: '#accfc0',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });