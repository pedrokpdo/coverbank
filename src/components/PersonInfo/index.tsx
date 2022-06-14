import { AntDesign, FontAwesome } from "@expo/vector-icons"
import React from "react"
import { Text, View } from "react-native"
import { Container } from "./styles"

export const PersonInfo = () => {
    return (
        <Container>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <FontAwesome name='bank' size={60} color='#666666'/>
                <Text style={{fontSize:18, fontWeight:'bold', color:"#666666"}}>POLIANA</Text>
            </View>
            <AntDesign name='qrcode' size={260} color='#000000' style={{marginTop: 8}}/>
            <Text style={{fontWeight:'bold', fontSize:16, color:'#000000'}}>Agencia: 1</Text>
            <Text style={{fontWeight:'bold', fontSize:16, color:'#000000'}}>Conta: 5924344-1</Text>
        </Container>
    )
}