import React, { useState } from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Image, Modal, Text, TouchableHighlight } from 'react-native';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView'


export default function Map({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(require('../assets/imagesformap/floor1.png'));
  const [selectedButton, setSelectedButton] = useState('button1');
  const showImage = (image, button) => {
    setSelectedImage(image);
    setSelectedButton(button);
  };
  const isButtonSelected = (button) => {
    return selectedButton === button;
  };
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const functionCombined1 = () =>{
    showImage(require('../assets/imagesformap/floor1.png'), 'button1');
    closeModal();
  };
  const functionCombined2 = () =>{
    showImage(require('../assets/imagesformap/floor2.png'), 'button2');
    closeModal();
  };
  const functionCombined3 = () =>{
    showImage(require('../assets/imagesformap/parking.png'), 'button3');
    closeModal();
  };
  return (
    <React.Fragment>
      <Modal animationType="fade"
          transparent={true}
          visible={modalVisible}
          style={styles.modal}>
          <View style={styles.opacity}>
            <View style={styles.modalmenu}>
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={styles.arrow1}>
                  <Image style={styles.imgarrow1} source={require('../assets/arrow.png')} />
                </View>
              </TouchableWithoutFeedback>
              <View style={styles.textmenu}>
                <TouchableHighlight onPress={() => functionCombined1()} underlayColor="#DDDDDD" style={[styles.itemmenu, isButtonSelected('button1') && styles.selectedButton]}>
                  <View><Text style={styles.h1}>1 этаж</Text></View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => functionCombined2()} underlayColor="#DDDDDD" style={[styles.itemmenu, isButtonSelected('button2') && styles.selectedButton]}>
                  <View><Text style={styles.h1}>2 этаж</Text></View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => functionCombined3()} underlayColor="#DDDDDD" style={[styles.itemmenu, isButtonSelected('button3') && styles.selectedButton]}>
                  <View><Text style={styles.h1}>парковка</Text></View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>

    <View style={styles.back}>
      <View style={styles.common}>
        <TouchableWithoutFeedback onPress={openModal}>
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
            <Image  style={styles.map}  source={selectedImage} />
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
  selectedButton: {
    backgroundColor: '#222222',
  },
  opacity:{
    backgroundColorColor: 'white',
    width: '100%',
    height: '100%'
  },
  // button:{
  //   backgroundColor: 'white',
  //   paddingHorizontal: 20,
  //   paddingVertical: 6,
  //   borderRadius: 15,
  //   color: 'black',
  // },
  itemmenu:{
    backgroundColor: '#577A6A',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 15,
    marginBottom: 18,
  },
  textmenu:{
    marginTop: 30,
    marginBottom: 30,
  },
  modalmenu:{
    backgroundColor: '#3B5247',
    width: '50%',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
  },
  imgarrow1: {
    width: 18,
    height: 15,
  },
  arrow1: {
    backgroundColor: '#577A6A',
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    top: 10,
    justifyContent: 'center',
  },
  h1:{
    color: 'white',
    fontSize: 18,
    fontFamily: 'mt-regular',
  },
  modal:{
  },
  item:{
    top: '18%',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 0,
  },
  map:{
    width: 346,
    height: 480,
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
