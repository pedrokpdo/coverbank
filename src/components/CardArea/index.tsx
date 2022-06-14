import React from "react";
import { Text, View } from "react-native";
import { Container } from "../styles";
import { DownContainer, MainContainer, Title, UpContainer } from "./styles";

export const CardArea = () => {
    return (
        <MainContainer>
                <Title>CARTÕES</Title>
            <Container>
                <UpContainer>
                    <Text style={{ color: 'white', marginLeft: 16, marginTop: 16 }}>Ultilizado</Text>
                    <Text style={{ color: 'white', marginRight: 16, marginTop: 16 }}>Disponível</Text>
                </UpContainer>
                <DownContainer>
                    <Text style={{ color: '#555555', marginLeft: 16, marginTop: 16, fontSize: 16, fontWeight: "bold"}}>R$ 3,000.00</Text>
                    <Text style={{ color: '#555555', marginRight: 16, marginTop: 16, fontSize: 16, fontWeight: "bold" }}>R$ 1,000.00</Text>
                </DownContainer>

            </Container>
        </MainContainer>
    )
}