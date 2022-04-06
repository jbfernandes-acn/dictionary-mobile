import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StyleSheet, View, Text, ActivityIndicator } from 'react-native';

import { getWordOfTheDayFromAPI } from '../../redux/actions/wordoftheday';
import { getWordOfTheDay, isWordOfTheDayLoading } from '../../redux/selectors';

export default function WordOfTheDay () {
    const wordOfTheDay = useSelector(getWordOfTheDay)
    const isLoading = useSelector(isWordOfTheDayLoading)

    const dispatch = useDispatch()

    useEffect(() => {
      if (!wordOfTheDay) {
        dispatch(getWordOfTheDayFromAPI())
      }
    }, [dispatch, wordOfTheDay])

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