import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { Container, Line } from "./styles";

export const LinksPerfil = () => (
    <Container>
        <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{ marginLeft: 8, fontSize:18, color: '#666666' }}>Meus dados</Text>
            <Entypo name='chevron-right' color='#666666' size={45} style={{marginRight:24}}/>
        </View>
        <Line />
        <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{ marginLeft: 8, fontSize:18, color: '#666666' }}>Meus cartões</Text>
            <Entypo name='chevron-right' color='#666666' size={45} style={{marginRight:24}}/>
        </View>
        <Line />
        <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{ marginLeft: 8, fontSize:18, color: '#666666' }}>Ajuda</Text>
            <Entypo name='chevron-right' color='#666666' size={45} style={{marginRight:24}}/>
        </View>
        <Line />
        <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
            <Text style={{ marginLeft: 8, fontSize:18, color: '#666666' }}>Configurações</Text>
            <Entypo name='chevron-right' color='#666666' size={45} style={{marginRight:24}}/>
        </View>
        <Line />
    </Container>
)