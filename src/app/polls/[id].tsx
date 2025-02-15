import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';
import { poll } from '@/src/types/db';
import { supabase } from '@/src/lib/supabase';



const details = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [poll, setPoll] = useState<poll | null>(null);


  const [selected, setSelected] = useState('');


  useEffect(() => {
          const fetchPolls = async () => {
              console.log("Fetching....")
      
              let { data, error } = await supabase
              .from('polls')
              .select('*')
              .eq('id', Number.parseInt(id))
              .single();
              
              if (error) {
                  Alert.alert('Error Fetching data');
                  return;
              }
              
              setPoll(data || null); // ✅ Ensures we never set null
          };
          
          fetchPolls();
      }, []);
  

  const vote = ()=>{
    console.log('vote:' , selected)
  }
  return (
    <View style={styles.container}>
      <Stack.Screen name="(polls/[id]" options={{ title: "Poll Voting"}}/>
      <Text style={styles.question}>{poll?.question}</Text>

      <View style={{gap:5}}>
        {poll?.options.map((option) => (
          <Pressable onPress={() => setSelected(option)} key={option} style={styles.optionsContainer}>
            <Feather name={option === selected? "check-circle": "circle"} 
            size={18} color={option === selected ? "black" : "gray"} />
            <Text>{option}</Text>
          </Pressable>
        ))}
      </View>
      <Button onPress={vote} title='Vote' />
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