import React from "react";
import Main from './components/Main';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Map from './components/Map'

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    headerShown: false,
                  }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                    headerShown: false,
                  }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                    headerShown: false,
                  }}
            />
            <Stack.Screen
                name="Map"
                component={Map}
                options={{
                    headerShown: false,
                  }}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}