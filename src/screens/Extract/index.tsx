import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import { Balance } from "../../components/Balance";
import { Data } from "../../components/Data";
import { Header } from "../../components/Header";

export const Extract = () => {
    return (
        <>
            <Header icon='chevron-left' title='Conta Corrente' subtitle={ <Text style={{ marginRight: 16, fontSize: 16, color: 'red', fontWeight:"bold"}}>Filtrar</Text>}/>
            <Data date='Hoje' />
            <Balance type='red' title='Compra com o cartão de debito' day='02/12/2022' value='-R$32,00' />
            <Data date='Quarta, 1 de dezembro' />
            <Balance type='red' title='Compra com o cartão de debito' day='01/12/2022' value='-R$44,00' />
            <Balance type='red' title='Compra com o cartão de debito' day='01/12/2022' value='-R$78,00' />
            <Data date='Terça, 30 de novembro' />
            <Balance type='green' title='Pix recebido' day='29/11/2022' value='R$500,00' />
            <Balance type='green' title='Pix Recebido' day='29/11/2022' value='R$70,00' />
            <Balance type='red' title='Compra com o cartão de debito' day='29/11/2022' value='-R$32,00' />
            <Balance type='red' title='Compra com o cartão de debito' day='29/11/2022' value='-R$32,00' />


        </>
    )
}