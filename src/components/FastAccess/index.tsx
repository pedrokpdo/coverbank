import { AntDesign, Entypo, FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { SmallContainer } from "../Container";

export const FastAccess = ({navigation}) => {
    return (
        <>
            <Text style={{ paddingTop: 16, paddingLeft: 16, fontSize: 16, fontWeight: 'bold', color: '#d1d1d1' }}>ACESSO RÁPIDO</Text>
            <View style={{ flexDirection: 'row' }}>
                <SmallContainer navigation={navigation}>
                    <Ionicons name="ios-newspaper-outline" size={45} color="#666666" />
                    <Text style={{ padding: 16, color: '#666666' }}>Extrato</Text>
                </SmallContainer>
                <SmallContainer navigation=''>
                    <FontAwesome name="money" size={45} color="#666666" />
                    <Text style={{ padding: 16, color: '#666666' }}>Transferencia</Text>
                </SmallContainer>
                <SmallContainer navigation=''>
                    <MaterialIcons name='smartphone' size={45} color="#666666" />
                    <Text style={{ padding: 16, color: '#666666' }}>Extrato</Text>
                </SmallContainer>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
                <SmallContainer navigation=''>
                    <AntDesign name="barcode" size={45} color="#666666" />
                    <Text style={{ padding: 16, color: '#666666' }}>Pagamentos</Text>
                </SmallContainer>
                <SmallContainer navigation=''>
                    <FontAwesome5 name="hand-holding-usd" size={45} color="#666666" />
                    <Text style={{ padding: 16, color: '#666666' }}>Emprestimos</Text>
                </SmallContainer>
                <SmallContainer navigation=''>
                    <Entypo name='line-graph' size={45} color="#666666" />
                    <Text style={{ padding: 16, color: '#666666' }}>Investimentos</Text>
                </SmallContainer>
            </View>
        </>
    )
}