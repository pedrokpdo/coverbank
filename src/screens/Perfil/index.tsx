import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import { Header } from "../../components/Header";
import { LinksPerfil } from "../../components/LinksPerfil";
import { PersonInfo } from "../../components/PersonInfo";

export const Perfil = () => {
    return (
        <>
            <Header title='' icon='bank' subtitle={<Feather name="log-out" size={40} color='#666666' />} />
            <PersonInfo/>
            <LinksPerfil link='Meus Dados'/>
            <LinksPerfil link='Meus Cartões'/>
            <LinksPerfil link='Ajuda'/>
            <LinksPerfil link='Configurações'/>
        </>
    )
}