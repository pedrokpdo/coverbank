import React from "react";
import { Text } from "react-native";
import { Container, TextMoney, TextSub } from "./styles";

export const BigContainer = ({money, sub}) => {
    return(
        <Container>
            <TextMoney>{money}</TextMoney>
            <TextSub>{sub}</TextSub>
        </Container>
    )
}