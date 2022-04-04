import React, {useState, useEffect} from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function WordOfTheDay ({}) {
    const [wordOfTheDay, setWordOfTheDay] = useState('obnoxious')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://random-word-api.herokuapp.com/word?number=1`)
            .then(response => {
                setWordOfTheDay(response.data[0])
                setIsLoading(false)
            })
            .catch(error => {
                setWordOfTheDay(null)
            });
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Word of the day</Text>
            { 
                isLoading ?
                <ActivityIndicator size="small" color="white" /> :
                <Text style={styles.wordOfTheDay}>{wordOfTheDay}</Text>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        padding: 20,
        marginTop: 80,
        borderRadius: 10,
    },
    title: {
        color: '#1976d2',
        fontSize: 20,
        marginBottom: 5
    },
    wordOfTheDay: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }
});