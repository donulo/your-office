import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback } from 'react-native';

export default function Map() {
  return (
    <View style={styles.back}>
        <View style={styles.common}>
          
        </View>
        <View style={styles.circle}>
           <View style={styles.elementInCircle}></View>     
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  common:{

  },
  elementInCircle:{

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
