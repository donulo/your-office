import React from "react";
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native';

export default function Main({ navigation }) {
    const loadScene = (scene) => {
        navigation.navigate(scene);
    }

    return (
        <View style={styles.back}>
            <View style={styles.cycle}>
                <Image style={styles.img} source={require('../assets/logo.png')} />
            </View>

            <Text style={styles.text}>Твой умный офис</Text>

            <TouchableWithoutFeedback onPress={loadScene('SignIn')}>
                <View style={styles.button}><Text style={styles.textButton}>Вход</Text></View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={loadScene('SignUp')}>
                <View style={styles.button}><Text style={styles.textButton}>Регистрация</Text></View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        top: 40,
        width: 250,
        height: 250,
    },
    cycle: {
        backgroundColor: '#222222',
        color: '#222222',
        width: '130%',
        height: 550,
        borderWidth: 1,
        borderRadius: 500,
        alignItems: 'center',
        justifyContent: 'center',
        top: -160,
    },
    back: {
        width: '100%',
        height: '100%',
        backgroundColor: '#8ACCB0',
        alignItems: 'center',
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