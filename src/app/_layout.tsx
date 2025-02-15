 import { View, Text } from 'react-native'
 import React from 'react'
import {Stack } from 'expo-router';
import AuthProvider from '../provider/AuthProvider';
 
 const _layout = () => {
   return (
      <AuthProvider>
        <Stack/>;
      </AuthProvider>
   ) 
 }
 
 export default _layout