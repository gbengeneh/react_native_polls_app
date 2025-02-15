import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase'
import { useAuth } from '../../provider/AuthProvider'
import { Redirect } from 'expo-router'

const ProfileScreen = () => {
const {user} = useAuth();

  return (
    <View>
      <Text>User Id: {user?.id}</Text>

      <Button title='Logout' onPress={() => supabase.auth.signOut()}/>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})