import { FlatList, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

const polls = [{ id: 1 }, { id: 2 }, { id: 3 }]
const HomeScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: "Polls" }} />
            <FlatList
                data={polls}
                contentContainerStyle={styles.container}
                renderItem={({ item }) => (
                    <Link href={{
                        pathname: `/polls/[id]`,
                        params: { id: item.id}
                    }} style={styles.pollContainer}>
                        <Text > {item.id}:   Poll Question Example</Text>
                    </Link>
                )}
            />
        </>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        gap: 5,
    },
    pollContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },
    pollTitle: {
        fontWeight: "bold",
        fontSize: 16
    }

})