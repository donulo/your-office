import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Image } from 'react-native';

export default function Map() {
  return (
    <View style={styles.back}>
        <View style={styles.common}>
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
        <View style={styles.circle}>
           <View style={styles.elementInCircle}>
           <TouchableWithoutFeedback>
              <Image style={styles.img1} source={require('../assets/imagesformap/profile.png')} />
           </TouchableWithoutFeedback>
           <TouchableWithoutFeedback>
              <Image style={styles.img2} source={require('../assets/imagesformap/chat.png')} />
           </TouchableWithoutFeedback>
           <TouchableWithoutFeedback>
              <Image style={styles.img3} source={require('../assets/imagesformap/calendar.png')} />
           </TouchableWithoutFeedback>
            </View>     
        </View>
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
  img1:{
    left: 20,
    width: 30,
    height: 33,
  },
  img2:{
    width: 35,
    height: 33,
  },
  img3:{
    right: 20,
    width: 40,
    height: 40,
  },
  common:{
    width: '100%'
  },
  elementInCircle:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },
  circle:{
    backgroundColor: '#222222',
    color: '#222222',
    width: '110%',
    height: 120,
    borderWidth: 1,
    borderTopRightRadius: 52,
    borderTopLeftRadius: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back:{
    width: '100%',
    height: '100%',
    backgroundColor: '#8ACCB0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
