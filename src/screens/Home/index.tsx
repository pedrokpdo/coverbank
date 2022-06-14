import React from "react";
import { ScrollView, Text, View } from "react-native";
import { BigContainer } from "../../components/BigContainer";
import { BigHeader } from "../../components/BigHeader";
import { SmallContainer } from "../../components/Container";
import { FontAwesome, Ionicons, MaterialIcons, AntDesign, FontAwesome5, Entypo } from '@expo/vector-icons'
import { CardArea } from "../../components/CardArea";
import { FastAccess } from "../../components/FastAccess";

export const Home = () => {
    return (
        <ScrollView>
            <BigHeader />
            <View style={{ flexDirection: "row" }}>
                <BigContainer money='R$ 3,000.00' sub='Saldo disponivel' />
                <BigContainer money='R$ 0.00' sub='Agendado até 30 de junho' />
            </View>
           <FastAccess/>
            <CardArea/>
        </ScrollView>
    )
}