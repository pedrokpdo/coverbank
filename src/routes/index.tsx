import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AppRoutes } from "./app.routes";
import {StackRoutes} from "./stack";

export const Routes = () => {
    return(
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}