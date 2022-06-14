import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { Container } from "./styles";

export const Balance = ({ title, day, value, type }) => {
    return (
        <Container>
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <FontAwesome name='circle' color={type} />
                <View style={{marginLeft:16}}>
                    <Text style={{fontSize:16, fontWeight:"bold", color:'#666666'}}>{title}</Text>
                    <Text style={{fontSize:16, fontWeight:"bold", color:'#666666'}}>{day}</Text>
                </View>
            </View>
            <Text style={{fontSize:18, fontWeight:"bold", color:'#666666'}}>{value}</Text>
        </Container>
    )
}