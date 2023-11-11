import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Image } from 'react-native';
import { seperatorStyles } from './seperatorStyles';


export default function Profile({ navigation }) {
    const [text, setValue] = useState('');
    const onChangeMail = (text) =>{ setValue(text)};
    const onChangePassword = () =>{};
    return (
        <View style={styles.back}>
          <TouchableWithoutFeedback>
            <View style={styles.arrow}>
              <Image style={styles.imgarrow} source={require('../assets/arrow.png')} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View style={styles.settings}>
              <Image style={styles.imgsettings} source={require('../assets/settings.png')} />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.div}>
            <View style={styles.block}>
              <View style={styles.blockforava}>
                <View style={styles.ava}></View>
                <View style={styles.reting}><Text style={styles.texth5}>98</Text></View>
                <View style={styles.forpen}></View>
              </View>
              <Text style={styles.texth2}>Анна Ахметова</Text>
              <Text style={styles.texth3}>программист · стаж 10 лет </Text>
            </View>
            <View style={styles.blockitems}>
              <Seperator/>
              <View style={styles.item}><View style={styles.img}></View><Text style={styles.texth1}>Аккаунт</Text></View>
              <Seperator/>
              <View style={styles.item}><View style={styles.img}></View><Text style={styles.texth1}>Достижения</Text></View>
              <Seperator/>
              <View style={styles.item}><View style={styles.img}></View><Text style={styles.texth1}>Рейтинг</Text></View>
              <Seperator/>
              <View style={styles.item}><View style={styles.img}></View><Text style={styles.texth1}>История посещения</Text></View>
              <Seperator/>
              <View style={styles.item}><View style={styles.img}></View><Text style={styles.texth1}>Помощь</Text></View>
              <Seperator/>
            </View>
            <View style={styles.blockbottom}>
                <TouchableWithoutFeedback>
                    <View style={styles.button}><Text style={styles.textButton}>Выйти из аккаунта</Text></View>
                </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      );
}
import { ViewStyle } from 'react-native';

export const seperatorStyles: ViewStyle = {
    height: 0.4,
    backgroundColor: 'white',
    width: '100%'
};
const Seperator = () => <View style={seperatorStyles}/>;
const styles = StyleSheet.create({
    forpen:{
      width: 45,
      height: 45,
      backgroundColor: '#3B5247',
      position: 'absolute',
      alignSelf: 'flex-end',
      justifyContent: 'center',
      borderRadius: 15,
      top: '75%'
    },
    texth5:{
      color: 'white',
      fontFamily: 'mt-bold',
      fontSize: 16,
    },
    reting:{
      width: 85,
      height: 35,
      backgroundColor: '#3B5247',
      borderRadius: 15,
      position: 'absolute',
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    ava:{
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
      borderRadius: 300,
    },
    blockforava:{
      height: '70%',
      width: '70%',
      marginBottom: 10,
    },
    texth3:{
      color: '#425B4F',
      fontFamily: 'mt-regular',
      fontSize: 16,
    },
    texth2:{
      color: '#3B5247',
      fontFamily: 'mt-bold',
      fontSize: 20,
    },
    item:{
      flexDirection: 'row',
      alignItems: 'center',
    },
    img:{
      backgroundColor: 'white',
      height: 55,
      width: 55,
    },
    texth1:{
      color: '#3B5247',
      fontFamily: 'mt-medium',
      fontSize: 18,
    },
    button: {
      marginTop: 40,
      alignItems: 'center',
      justifyContent: 'center',
      width: '82%',
      backgroundColor: '#3B5247',
      borderRadius: 13,
      height: 40,
      marginBottom: 10,
    },
    textButton: {
      color: 'white',
      fontSize: 18,
      fontFamily: 'mt-semibold',
    },
    block:{
      width: '100%',
      flex: 2,
      alignItems: 'center',
    },
    blockitems:{
      width: '100%',
      flex: 2,
      justifyContent: 'space-between',
    },
    blockbottom:{
      width: '100%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    div:{
      height:'88%',
      width:'82%',
    },
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
    