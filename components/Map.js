import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Image } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'

export default function Map({ navigation }) {
  return (
    <React.Fragment>
    <View style={styles.back}>
      <View style={styles.common}>
        <TouchableWithoutFeedback>
          <View style={styles.arrow}>
            <Image style={styles.imgarrow} source={require('../assets/burger.png')} />
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Settings')}>
          <View style={styles.settings}>
            <Image style={styles.imgsettings} source={require('../assets/settings.png')} />
          </View>
        </TouchableWithoutFeedback>
      </View>
        <View style={styles.item}>
          <ReactNativeZoomableView
            maxZoom={1.5}
            minZoom={1}
            zoomStep={0.5}
            initialZoom={1}
            bindToBorders={true}
            captureEvent={true}>
            <Image style={[styles.map]} source={require('../assets/imagesformap/floor1.png')} />
          </ReactNativeZoomableView>
        </View>
      <View style={styles.circle}>
        <View style={styles.elementInCircle}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
            <Image style={styles.img1} source={require('../assets/imagesformap/profile.png')} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Chat')}>
            <Image style={styles.img2} source={require('../assets/imagesformap/chat.png')} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Calendary')}>
            <Image style={styles.img3} source={require('../assets/imagesformap/calendar.png')} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  item:{
    top: '18%',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 0,
  },
  map:{
    width: 346,
    height: 460,
  },
  imgarrow: {
    width: 30,
    height: 17,
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
  img1: {
    left: 20,
    width: 27,
    height: 30,
  },
  img2: {
    width: 32,
    height: 30,
  },
  img3: {
    right: 20,
    width: 37,
    height: 37,
  },
  common: {
    zIndex: 1,
    width: '100%'
  },
  elementInCircle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%'
  },
  circle: {
    backgroundColor: '#222222',
    color: '#222222',
    width: '110%',
    height: 100,
    borderWidth: 1,
    zIndex:1,
    borderTopRightRadius: 52,
    borderTopLeftRadius: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    width: '100%',
    height: '100%',
    backgroundColor: '#accfc0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
