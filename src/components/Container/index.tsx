import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import {MaterialCommunityIcons} from '@expo/vector-icons';



export const SmallContainer = ({navigation, children}) => {
    return (
        <Container onPress={() => navigation.navigate('Extrato')}>
            {children}
        </Container>
    )
}