import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Image, ViewStyle, ScrollView } from 'react-native';


export default function Chat({ navigation }) {
  const [items, setItems] = useState({});
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
            <View></View>
      <View style={styles.div}>
        <View style={styles.search}>
            <TextInput style={styles.TextInput} maxLength={30} pointerEvents="box-only" placeholder="Поиск" />
            <Image style={styles.imglupa} source={require('../assets/imagesforchat/lupa.png')} />
        </View>
        <Text style={styles.texth1}>Рабочие чаты</Text>
        <View style={styles.chat}>
            <ScrollView>
                <View style={styles.block}>
                    <View style={styles.leftside}>
                        <Image style={styles.imguser} source={require('../assets/imagesforchat/User.png')} />
                        <View style={styles.item}>
                            <Text style={styles.texth2}>Руководитель</Text>
                            <Text style={styles.texth3}>отчеты получила</Text>
                        </View>
                    </View>
                    <View style={styles.rightside}>
                        <Text style={styles.texth4}>16:42</Text>
                        <View style={styles.circle}><Text style={styles.texth5}>1</Text></View>
                    </View>
                </View>
                <View style={styles.block}>
                    <View style={styles.leftside}>
                        <View style={styles.circle1}></View>
                        <View style={styles.item}>
                            <Text style={styles.texth2}>Офис 313</Text>
                            <Text style={styles.texth3}>задачи все решены</Text>
                        </View>
                    </View>
                    <View style={styles.rightside}>
                        <Text style={styles.texth4}>16:40</Text>
                        <View style={styles.circle}><Text style={styles.texth5}>3</Text></View>
                    </View>
                </View>
                <View style={styles.block}>
                    <View style={styles.leftside}>
                        <Image style={styles.imguser} source={require('../assets/imagesforchat/User2.png')} />
                        <View style={styles.item}>
                            <Text style={styles.texth2}>Антон Иванов</Text>
                            <Text style={styles.texth3}>идешь обедать?</Text>
                        </View>
                    </View>
                    <View style={styles.rightside}>
                        <Text style={styles.texth4}>16:42</Text>
                        <View style={[styles.circle, {opacity: 0}]}><Text style={styles.texth5}>1</Text></View>
                    </View>
                </View>
                <View style={styles.block}>
                    <View style={styles.leftside}>
                        <Image style={styles.imguser} source={require('../assets/imagesforchat/User1.png')} />
                        <View style={styles.item}>
                            <Text style={styles.texth2}>Евгения Смирнова</Text>
                            <Text style={styles.texth3}>я сдала ключ охране</Text>
                        </View>
                    </View>
                    <View style={styles.rightside}>
                        <Text style={styles.texth4}>Вчера</Text>
                        <View style={[styles.circle, {opacity: 0}]}><Text style={styles.texth5}>1</Text></View>
                    </View>
                </View>
                <View style={styles.block}>
                    <View style={styles.leftside}>
                        <Image style={styles.imguser} source={require('../assets/imagesforchat/User3.png')} />
                        <View style={styles.item}>
                            <Text style={styles.texth2}>Даниил Самылов</Text>
                            <Text style={styles.texth3}>уже на третьем этапе</Text>
                        </View>
                    </View>
                    <View style={styles.rightside}>
                        <Text style={styles.texth4}>Вчера</Text>
                        <View style={styles.circle}><Text style={styles.texth5}>9</Text></View>
                    </View>
                </View>
                <View style={styles.block}>
                    <View style={styles.leftside}>
                        <View style={styles.circle2}></View>
                        <View style={styles.item}>
                            <Text style={styles.texth2}>Офис 208</Text>
                            <Text style={styles.texth3}>встретьте заказчика</Text>
                        </View>
                    </View>
                    <View style={styles.rightside}>
                        <Text style={styles.texth4}>Вчера</Text>
                        <View style={styles.circle}><Text style={styles.texth5}>23</Text></View>
                    </View>
                </View>
                <View style={styles.block}>
                    <View style={styles.leftside}>
                        <Image style={styles.imguser} source={require('../assets/imagesforchat/User4.png')} />
                        <View style={styles.item}>
                            <Text style={styles.texth2}>Элеонора Дмитриевна</Text>
                            <Text style={styles.texth3}>Акселератор Цифра!</Text>
                        </View>
                    </View>
                    <View style={styles.rightside}>
                        <Text style={styles.texth4}>Чт</Text>
                        <View style={styles.circle}><Text style={styles.texth5}>3</Text></View>
                    </View>
                </View>
                <View style={styles.block}>
                    <View style={styles.leftside}>
                        <View style={styles.circle3}></View>
                        <View style={styles.item}>
                            <Text style={styles.texth2}>Офис 233</Text>
                            <Text style={styles.texth3}>я ответила</Text>
                        </View>
                    </View>
                    <View style={styles.rightside}>
                        <Text style={styles.texth4}>Ср</Text>
                        <View style={styles.circle}><Text style={styles.texth5}>21</Text></View>
                    </View>
                </View>
                <View style={styles.block}>
                    <View style={styles.leftside}>
                        <View style={styles.circle4}></View>
                        <View style={styles.item}>
                            <Text style={styles.texth2}>Офис 117</Text>
                            <Text style={styles.texth3}>отлично</Text>
                        </View>
                    </View>
                    <View style={styles.rightside}>
                        <Text style={styles.texth4}>Ср</Text>
                        <View style={styles.circle}><Text style={styles.texth5}>81</Text></View>
                    </View>
                </View>
                <View style={styles.block}>
                    <View style={styles.leftside}>
                        <Image style={styles.imguser} source={require('../assets/imagesforchat/User2.png')} />
                        <View style={styles.item}>
                            <Text style={styles.texth2}>Офис 198</Text>
                            <Text style={styles.texth3}>принято, исправим</Text>
                        </View>
                    </View>
                    <View style={styles.rightside}>
                        <Text style={styles.texth4}>Вт</Text>
                        <View style={styles.circle}><Text style={styles.texth5}>91</Text></View>
                    </View>
                </View>
            </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    rightside:{
        alignItems: 'flex-end',
    },
    texth5:{
        color: 'black',
        fontSize: 10,
        fontFamily: 'mt-semibold',
    },
    circle:{
        backgroundColor: '#F1E0AC',
        borderRadius: 10,
        width: 16,
        height: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    texth4:{
        color: 'white',
        fontSize: 12,
        fontFamily: 'mt-regular',
        marginBottom: 5,
    },
    texth3:{
        color: 'rgba(255,255,255, 0.6)',
        fontSize: 14,
        fontFamily: 'mt-regular',
    },
    texth2:{
        color: 'white',
        fontSize: 16,
        fontFamily: 'mt-semibold',
        marginBottom: 3,
    },
    circle1:{width: 51, height: 51, borderRadius: 50, backgroundColor: 'pink', marginRight: 8,},
    circle2:{width: 51, height: 51, borderRadius: 50, backgroundColor: 'yellow', marginRight: 8,},
    circle3:{width: 51, height: 51, borderRadius: 50, backgroundColor: 'violet', marginRight: 8,},
    circle4:{width: 51, height: 51, borderRadius: 50, backgroundColor: '#fbfef8', marginRight: 8,},
    imguser:{
        width: 51,
        height: 51,
        marginRight: 8,
    },
    leftside:{
        width:'80%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    block:{
        width: '100%',
        height: 72,
        backgroundColor: '#3B5247',
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    chat:{
        width: '100%',

    },
    texth1:{
        color: '#3B5247',
        fontSize: 22,
        fontFamily: 'mt-bold',
        marginBottom: 10,
    },
    search:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30%',
    },
    imglupa:{
        position: 'absolute',
        width: 21,
        height: 21,
        left: '90%',
    },
  TextInput:{
    color: 'white',
    fontSize: 16,
    fontFamily: 'mt-regular',
    letterSpacing: 2,    
    paddingLeft: 30,
    paddingRight: 50,
    width: '100%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#3B5247'
  },
div: {
    height: '90%',
    width: '90%',
  },
imgarrow: {
    width: 22,
    height: 18,
  },
  imgsettings: {
    width: 27,
    height: 27.76,
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
  settings: {
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
back: {
    width: '100%',
    height: '111%',
    backgroundColor: '#8ACCB0',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})