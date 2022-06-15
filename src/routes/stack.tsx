import React from "react";
import { Extract } from "../screens/Extract";
import { Home } from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Perfil } from "../screens/Perfil";

const {Navigator, Screen} = createNativeStackNavigator()

export const StackRoutes = () => {
    return(
        <Navigator initialRouteName="Home">
            <Screen options={{headerShown: false}} name="Home" component={Home}/>
            <Screen options={{headerShown: false}} name="Extrato" component={Extract}/>
        </Navigator>
    )
}