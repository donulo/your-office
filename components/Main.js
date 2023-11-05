import React from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

export default function Main({ navigation }) {
    const loadScene = (scene) => {
        navigation.navigate(scene);
    }

    return (
        <View style={styles.back}>
            <View style={styles.div}>
                <View style={styles.cycle}>
                    <Image style={styles.img} source={require('../assets/logo.png')} />
                </View>
            </View>
            <View style={styles.div1}>
                <Text style={styles.text}>Твой умный офис</Text>
                <TouchableWithoutFeedback onPress={loadScene('SignIn')}>
                    <View style={styles.button}><Text style={styles.textButton}>Вход</Text></View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={loadScene('SignUp')}>
                    <View style={styles.button}><Text style={styles.textButton}>Регистрация</Text></View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    div:{
        width: '100%',
        alignItems: 'center',
    },
    div1:{
        height: '50%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        top: 40,
        width: 250,
        height: 250,
        top: -30,
    },
    cycle: {
        backgroundColor: '#222222',
        color: '#222222',
        width: '130%',
        height: 390,
        borderWidth: 1,
        borderBottomLeftRadius: 390,
        borderBottomRightRadius: 390,
        alignItems: 'center',
        justifyContent: 'center',
    },
    back: {
        width: '100%',
        height: '100%',
        backgroundColor: '#8ACCB0',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'mt-bold',
    },
    button: {
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '82%',
        backgroundColor: '#222222',
        borderRadius: 13,
        height: 55,
    },
    textButton: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'mt-semibold',
    },
});