import { Feather } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text } from "react-native";
import { Header } from "../../components/Header";
import { LinksPerfil } from "../../components/LinksPerfil";
import { PersonInfo } from "../../components/PersonInfo";

export const Perfil = () => {
    return (
        <ScrollView>
            <Header title='' icon='bank' subtitle={<Feather name="log-out" size={40} color='#666666' />} />
            <PersonInfo/>
            <LinksPerfil/>
        </ScrollView>
    )
}