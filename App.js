import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes'
import { Spacing } from './src/screens/Home/styles';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Spacing/>
        <AppRoutes />
      </NavigationContainer>
    </>
  );
}

