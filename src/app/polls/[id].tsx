import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';


const poll = {
  question: 'React Native vs Flutter',
  options: ['React Native', 'SwiftUI', 'Flutter']
}
const details = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [selected, setSelected] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{poll.question}</Text>

      <View style={{gap:5}}>
        {poll.options.map((option) => (
          <Pressable onPress={() => setSelected(option)} key={option} style={styles.optionsContainer}>
            <Feather name={option === selected? "check-circle": "circle"} 
            size={18} color={option === selected ? "black" : "gray"} />
            <Text>{option}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

export default details

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  question: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center'

  },
  optionsContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    gap: 12,
  }
})