import React from "react";
import { Container } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";

export const Data = ({date}) => {
    return (
        <Container>
            <FontAwesome name="calendar" size={45} color='#666666' style={{marginLeft: 16}}/>
            <Text style={{marginLeft: 16 ,fontSize: 18, fontWeight:"bold", color:'#666666'}}>{date}</Text>
        </Container>
    )
}