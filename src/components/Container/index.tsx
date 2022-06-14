import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import {MaterialCommunityIcons} from '@expo/vector-icons'

export const SmallContainer = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}