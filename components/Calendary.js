import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Image, ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['ru'] = {
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ],
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ],
  monthNamesShort: ['Янв.', 'Фев.', 'Март', 'Апр.', 'Май', 'Июнь', 'Июль', 'Авг.', 'Сен.', 'Окт.', 'Нояб.', 'Дек.'],
  dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  dayNamesShort: ['Вс.', 'Пн.', 'Вт.', 'Ср.', 'Чт.', 'Пт.', 'Сб.'],
  today: "Сегодня"
};

LocaleConfig.defaultLocale = 'ru';

export default function Calendary({ navigation }) {  
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
        <Calendar style={styles.calendar} onDayPress={date => console.log(date)} 
        hideArrows={true} 
        onMonthChange={() => {}}
        initialDate= {'2023-11-25'}
        firstDay={1}
        markedDates={{
          '2023-11-25': { selected: true,
          selectedColor: '#577A6A', selectedTextColor: 'white' }}}
        theme={{
            calendarBackground: '#accfc0',
            dayTextColor: '#fff',
            textDayFontFamily: 'mt-regular',
            textDisabledColor: '#577A6A',
            textMonthFontFamily: 'mt-bold',
            textMonthFontSize: 20,
            monthTextColor: '#3B5247',
            'stylesheet.calendar.header': {
              dayTextAtIndex0: {
                color: '#3B5247',
                fontFamily: 'mt-semibold',
                fontSize: 13,
              },
              dayTextAtIndex1: {
                color: '#3B5247',
                fontFamily: 'mt-semibold',
                fontSize: 13,
              },
              dayTextAtIndex2: {
                color: '#3B5247',
                fontFamily: 'mt-semibold',
                fontSize: 13,
              },
              dayTextAtIndex3: {
                color: '#3B5247',
                fontFamily: 'mt-semibold',
                fontSize: 13,
              },
              dayTextAtIndex4: {
                color: '#3B5247',
                fontFamily: 'mt-semibold',
                fontSize: 13,
              },
              dayTextAtIndex5: {
                color: '#d83737',
                fontFamily: 'mt-semibold',
                fontSize: 13,
              },
              dayTextAtIndex6: {
                color: '#d83737',
                fontFamily: 'mt-semibold',
                fontSize: 13,
              }
            }
          }}
        ></Calendar>
        <View style={styles.item}>
          <Text style={styles.tetxh1}>События</Text>
          <Image style={styles.imgspen} source={require('../assets/imagesforcalendar/pen.png')} />
        </View>
        <ScrollView >
          <View style={styles.scroll}>
            <View style={{marginTop: 10 , marginRight: 10}}>
              <Text style={styles.tetxh2}>07:00</Text>
              <Text style={styles.tetxh2}>08:00</Text>
              <Text style={styles.tetxh2}>09:00</Text>
              <Text style={styles.tetxh2}>10:00</Text>
              <Text style={styles.tetxh2}>11:00</Text>
              <Text style={styles.tetxh2}>12:00</Text>
              <Text style={styles.tetxh2}>13:00</Text>
              <Text style={styles.tetxh2}>14:00</Text>
              <Text style={styles.tetxh2}>15:00</Text>
              <Text style={styles.tetxh2}>16:00</Text>
              <Text style={styles.tetxh2}>17:00</Text>
              <Text style={styles.tetxh2}>18:00</Text>
              <Text style={styles.tetxh2}>19:00</Text>
              <Text style={styles.tetxh2}>20:00</Text>
              <Text style={[styles.tetxh2, {marginBottom: 20}]}>21:00</Text>
            </View>
            <View>
              <View style={styles.block2}>
                <View>
                  <Text style={styles.tetxh3}>Спортзал</Text>
                  <Text style={styles.tetxh4}>отвлечемся от работы и проведем время активно</Text>
                </View>
                <View style={[styles.item2, {justifyContent: 'flex-end'}]}>
                  <Text style={styles.tetxh4}>07:00-09:00</Text>
                </View>
              </View>
              <View style={styles.block1}>
                <View>
                  <Text style={styles.tetxh3}>Сборы</Text>
                  <Text style={styles.tetxh4}>финальная подготовка к Demo Day</Text>
                </View>
                <View style={[styles.item2, {justifyContent: 'flex-end'}]}>
                  <Text style={styles.tetxh4}>10:00-12:00</Text>
                </View>
              </View>
              <View style={styles.block4}>
                <View>
                  <Text style={styles.tetxh3}>Demo Day</Text>
                  <Text style={styles.tetxh4}>финальное мероприятие акселератора "Цифра"</Text>
                </View>
                <View style={styles.item2}>
                  <View style={styles.item1}>
                    <Image style={styles.imguser} source={require('../assets/imagesforchat/User1.png')} />
                    <Image style={styles.imguser1} source={require('../assets/imagesforchat/User3.png')} />
                    <Image style={styles.imguser2} source={require('../assets/imagesforchat/User4.png')} />
                    <Image style={styles.imguser3} source={require('../assets/imagesforchat/User.png')} />
                    <Text style={{color: 'white', fontFamily: 'mt-bold', fontSize: 10,}}>+18</Text>
                  </View>
                  <Text style={styles.tetxh4}>13:00-16:00</Text>
                </View>
              </View>
              <View style={styles.block3}>
                <View>
                  <Text style={styles.tetxh3}>Празднование</Text>
                  <Text style={styles.tetxh4}>отправзднуем своей командой в кафе</Text>
                </View>
                <View style={styles.item2}>
                  <View style={styles.item1}>
                    <Image style={styles.imguser} source={require('../assets/imagesforchat/User1.png')} />
                    <Image style={styles.imguser1} source={require('../assets/imagesforchat/User3.png')} />
                    <Image style={styles.imguser2} source={require('../assets/imagesforchat/User4.png')} />
                  </View>
                  <Text style={styles.tetxh4}>17:00-19:00</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  item2: {flexDirection: 'row', alignItems: "center", justifyContent: "space-between"},
  item1:{flexDirection: 'row', alignItems: "center"},
  imguser:{width: 18, height: 18, },
  imguser1:{width: 18, height: 18, },
  imguser2:{width: 18, height: 18, },
  imguser3:{width: 18, height: 18, },
  tetxh3:{color: 'white', fontFamily: 'mt-bold', fontSize: 14,}, 
  tetxh4:{color: '#e8e9e8', fontFamily: 'mt-bold', fontSize: 9,}, 
  block4:{
    backgroundColor: '#3B5247',
    paddingVertical: 10,
    borderRadius: 13,
    paddingHorizontal: 10,
    width: '90%',
    top: 50,
    height: 110,
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  block3:{
    backgroundColor: '#3B5247',
    paddingVertical: 10,
    borderRadius: 13,
    paddingHorizontal: 10,
    width: '90%',
    top: 65,
    height: 80,
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  block1:{
    backgroundColor: '#3B5247',
    paddingVertical: 10,
    borderRadius: 13,
    paddingHorizontal: 10,
    width: '90%',
    top: 35,
    height: 80,
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  block2:{
    backgroundColor: '#3B5247',
    paddingVertical: 10,
    borderRadius: 13,
    paddingHorizontal: 10,
    width: '90%',
    top: 20,
    height: 80,
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  scroll:{
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  tetxh2:{
    color: '#3B5247',
    fontFamily: 'mt-regular',
    fontSize: 16,
    marginTop: 10,
  },
  item:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  imgspen:{width: 18, height: 18,},
  tetxh1:{
    
    color: '#3B5247',
    fontFamily: 'mt-semibold',
    fontSize: 20,
  },
  calendar:{
    borderRadius: 50,
  },
div: {
    top: 8,
    height: '90%',
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
})