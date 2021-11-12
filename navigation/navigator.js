import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Filmovi } from "../screens/Filmovi";
import { TextScreen } from "../screens/TextScreen";
import { Arrival } from "../screens/Arrival";
import { BladeRunner } from "../screens/BladeRunner";
import { Alien } from "../screens/Alien";
import { Dune } from "../screens/Dune";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons"

const Stack = createStackNavigator();

export function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Filmovi" component={Filmovi} options={{title: "Filmovi"}}/>
            <Stack.Screen name="TextScreen" component={TextScreen} options={{title: "TextScreen"}}/>
            <Stack.Screen name="Arrival" component={Arrival} options={{title: "Arrival"}}/>
            <Stack.Screen name="BladeRunner" component={BladeRunner} options={{title: "BladeRunner"}}/>
            <Stack.Screen name="Alien" component={Alien} options={{title: "Alien"}}/>
            <Stack.Screen name="Dune" component={Dune} options={{title: "Dune"}}/>
        </Stack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export function TabNavigator(){
    return(
        <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Filmovi" component={Filmovi} options={{headerTitle: "MOVIES"}}/>
            <Tab.Screen name="TextScreen" component={TextScreen} options={{headerTitle: "TEXT INPUT"}}/>
            <Tab.Screen name="Arrival" component={Arrival} options={{headerTitle: "ARRIVAL (2016)"}}/>
            <Tab.Screen name="BladeRunner" component={BladeRunner} options={{headerTitle: "BLADE RUNNER (1982)"}}/>
            <Tab.Screen name="Alien" component={Alien} options={{headerTitle: "ALIEN (1979)"}}/>
            <Tab.Screen name="Dune" component={Dune} options={{headerTitle: "DUNE (2021)"}}/>
        </Tab.Navigator>
        </NavigationContainer>
    )
}