import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Image, ViewStyle } from 'react-native';

export default function Profile({ navigation }) {
  const [text, setValue] = useState('');
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
        <View style={styles.block}>
          <View style={styles.blockforava}>
            <View style={styles.ava}><Image style={styles.imgava} source={require('../assets/imagesforprofile/User.png')} /></View>
            <View style={styles.reting}><Text style={styles.texth5}>98</Text></View>
            <View style={styles.forpen}><Image style={styles.imgpen} source={require('../assets/imagesforprofile/pen.png')} /></View>
          </View>
          <Text style={styles.texth2}>Анна Ахметова</Text>
          <Text style={styles.texth3}>программист · стаж 10 лет </Text>
        </View>
        <View style={styles.blockitems}>
          <Seperator/>
          <View style={styles.item}><View style={styles.img}><Image style={styles.imagkey} source={require('../assets/imagesforprofile/key.png')} /></View><Text style={styles.texth1}>Аккаунт</Text></View>
          <Seperator/>
          <View style={styles.item}><View style={styles.img}><Image style={styles.imgstar} source={require('../assets/imagesforprofile/tabler_star.png')} /></View><Text style={styles.texth1}>Достижения</Text></View>
          <Seperator/>
          <View style={styles.item}><View style={styles.img}><Image style={styles.imgachive} source={require('../assets/imagesforprofile/achievement.png')} /></View><Text style={styles.texth1}>Рейтинг</Text></View>
          <Seperator/>
          <View style={styles.item}><View style={styles.img}><Image style={styles.imgstorage} source={require('../assets/imagesforprofile/storages.png')} /></View><Text style={styles.texth1}>История посещения</Text></View>
          <Seperator/>
          <View style={styles.item}><View style={styles.img}><Image style={styles.imgques} source={require('../assets/imagesforprofile/question.png')} /></View><Text style={styles.texth1}>Помощь</Text></View>
          <Seperator/>
        </View>
        <View style={styles.blockbottom}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Main')}>
            <View style={styles.button}><Text style={styles.textButton}>Выйти из аккаунта</Text></View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}
export const seperatorStyles: ViewStyle = {
    height: 0.4,
    backgroundColor: 'white',
    width: '100%'
};
const Seperator = () => <View style={seperatorStyles}/>;
const styles = StyleSheet.create({
    imgstorage:{width: 20,height: 21,},
    imgques:{width: 21,height: 21,},
    imgachive:{width: 24,height: 24, left: -1},
    imgstar:{width: 24,height: 23,},
    imagkey:{width: 20,height: 19,},
    imgpen:{
        width: 17,
        height:17,
    },
    imgava:{
        width: '100%',
        height: 'undefined',
        aspectRatio: 1,
    },
  forpen: {
    width: 45,
    height: 45,
    backgroundColor: '#3B5247',
    position: 'absolute',
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    top: '75%'
  },
  texth5: {
    color: 'white',
    fontFamily: 'mt-bold',
    fontSize: 16,
  },
  reting: {
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
  ava: {
    height: '100%',
    width: '100%',
    borderRadius: 300,
  },
  blockforava: {
    height: '74%',
    width: '70%',
    marginBottom: 10,
  },
  texth3: {
    color: '#425B4F',
    fontFamily: 'mt-regular',
    fontSize: 16,
  },
  texth2: {
    color: '#3B5247',
    fontFamily: 'mt-bold',
    fontSize: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 55,
    width: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texth1: {
    color: '#3B5247',
    fontFamily: 'mt-medium',
    fontSize: 17,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '82%',
    backgroundColor: '#3B5247',
    borderRadius: 13,
    height: 43,
    marginBottom: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'mt-regular',
  },
  block: {
    width: '100%',
    flex: 2,
    alignItems: 'center',
    marginBottom: 6,
  },
  blockitems: {
    width: '100%',
    flex: 2,
    justifyContent: 'space-between',
  },
  blockbottom: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  div: {
    height: '88%',
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
    backgroundColor: '#accfc0',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
