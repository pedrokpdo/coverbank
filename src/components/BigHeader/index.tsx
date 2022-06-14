import React from "react";
import { Text } from "react-native";
import { FontAwesome, Feather } from '@expo/vector-icons'
import { Container, IconsContainer, Name } from "../styles";

export const BigHeader = () => {
    return (
        <Container>
            <IconsContainer>
                <FontAwesome name="bank" size={45} style={{ padding: 16 }} color='#666666' />
                <Feather name="log-out" color='#666666' size={45} style={{ padding: 16 }}/>
            </IconsContainer>
            <Name>Poliana</Name>
        </Container>
    )
}