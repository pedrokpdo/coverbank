import { Container } from "./styles"
import { FontAwesome } from '@expo/vector-icons'
import { Text, View } from "react-native"

export const Header = ({ icon, title, subtitle }) => {
    return (
        <Container>
            <View style={{flexDirection: "row", alignItems: "center"}}>
                <FontAwesome color='#666666' name={icon} size={45} style={{ marginLeft: 16 }} />
                <Text style={{marginLeft: 16, fontSize: 18, color: '#fff'}}>{title}</Text>
            </View>
           <Text style={{margin: 16}}>{subtitle}</Text>
        </Container>
    )
}