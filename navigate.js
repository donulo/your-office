import React from "react";
import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{ title: 'Главная' }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ title: 'Регистрация' }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ title: 'Вход' }}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}