import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Perfil } from '../screens/Perfil';
import { Home } from '../screens/Home';
import { Extract } from '../screens/Extract';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { StackRoutes } from './stack';


const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <Navigator 
            initialRouteName='Home'
        screenOptions={{
            headerShown:false,
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: '#666666',
            tabBarShowLabel:false,
            tabBarStyle: {
                height: 77,
                backgroundColor: '#999999'
            }
        }}>
            <Screen 
            name='Home'
            component={StackRoutes}
            options={{
                tabBarIcon: (({size, color}) => 
                    <FontAwesome name='bank' size={40} color={color}/>
                )
            }}
        />
            <Screen
                name='Perfil'
                component={Perfil}
                options={{
                    tabBarIcon: (({size, color}) => 
                        <Ionicons name='person-circle' size={45} color={color}/>
                    )
                }}
            />
              
        </Navigator>
    )
}