import { Alert, FlatList, Pressable, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, Stack, useNavigation, useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { supabase } from '../lib/supabase';
import { Database, Tables } from '../types/supabase';
import Header from '../components/Header';
import { poll } from '../types/db';
// const polls = [{ id: 1 }, { id: 2 }, { id: 3 }]
const HomeScreen = () => {
    const router = useRouter(); // Use the router hook

    const [polls, setPolls] = useState<poll[]>([]);
    
    useEffect(() => {
        const fetchPolls = async () => {
            console.log("Fetching....")
    
            let { data, error } = await supabase.from('polls').select('*');
            
            if (error) {
                Alert.alert('Error Fetching data');
                return;
            }
            
            setPolls(data || []); // ✅ Ensures we never set null
        };
        
        fetchPolls();
    }, []);
    
    return (
        <>
            <Stack.Screen options={{ title: "Polls", headerShown: false}} />
            <Header/>
            <FlatList
                data={polls}
                contentContainerStyle={styles.container}
                renderItem={({ item }) => (
                    <Link href={{
                        pathname: `/polls/[id]`,
                        params: { id: item.id }
                    }} style={styles.pollContainer}>
                        <Text > {item.question}</Text>
                    </Link>
                )}
            />
            <TouchableOpacity style={styles.floatingButton} onPress={() => router.push('/polls/newPoll')}>
                <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        gap: 6,
        paddingTop: 70,
    },
    pollContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },
    pollTitle: {
        fontWeight: "bold",
        fontSize: 16
    },
    floatingButton: {
        position: 'absolute',
        bottom: 70,
        right: 20,
        backgroundColor: '#007bff',
        width: 40,
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // For Android shadow
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
    },

})