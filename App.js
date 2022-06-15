import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes'
import { Spacing } from './src/screens/Home/styles';
import Stack from './src/routes/stack';
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
        <Spacing/>
        <Routes/>
    </>
  );
}

