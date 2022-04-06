import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StyleSheet, Text, View, ScrollView, ActivityIndicator, TouchableOpacity, } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'

import Meaning from './Meaning'

import { playWordSound } from '../../resources/sound'
import { getWordFromAPI } from '../../redux/actions/word'
import { addFavorite, removeFavorite } from '../../redux/actions/favorites'
import { getWord, isWordLoading, checkIsFavorite } from '../../redux/selectors'


export default function WordDetail ({ navigation, route }) {

    const word = route.params.word
    const dispatch = useDispatch()

    let isLoading = useSelector(isWordLoading)
    let wordInfo = useSelector(getWord)
    let isFavoriteWord = useSelector(checkIsFavorite(word))

    useEffect(() => {
        dispatch(getWordFromAPI(word))
    }, [dispatch, word])

    const toggleFavorite = () => {
        if (isFavoriteWord) {
            dispatch(removeFavorite(word))
        } else {
            dispatch(addFavorite(word))
        }
    }

    return (
        <View style={styles.container}>
            {
                isLoading 
                ?
                <ActivityIndicator 
                    style={styles.activityIndicator} 
                    size="large" color="white" 
                /> 
                :
                wordInfo === null 
                ?
                <Text style={styles.notFoundText}>Word not found</Text>
                :
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity 
                            style={{...styles.speakIcon, marginBottom: wordInfo.phonetic ? 0 : 15}} 
                            onPress={() => playWordSound(word)}
                        >
                            <FontAwesome name="volume-up" size={38} color="#1976d2" />
                        </TouchableOpacity>
                        <View style={styles.headerLeft}>
                            <Text style={styles.title}>{wordInfo.word}</Text>
                            <Text>{wordInfo.phonetic && wordInfo.phonetic}</Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.headerRight} 
                            onPress={toggleFavorite}>
                            <Ionicons name={isFavoriteWord ? 'heart' : 'heart-outline'} size={28} color="#f55e53" />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={styles.main}>
                        {
                            wordInfo.meanings.map((meaning, index) => 
                                <Meaning 
                                    key={`${meaning.partOfSpeech}_${index}`} 
                                    meaning={meaning}
                                    navigation={navigation}
                                />
                            )
                        }
                    </ScrollView>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        flex: 1,
        justifyContent: 'center',
    },
    activityIndicator: {
    },
    notFoundText: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    },
    header: {
        flexDirection: 'row'
    },
    speakIcon: {
        alignSelf: 'center',
        marginRight: 15,
    },
    headerLeft: {
        alignSelf: 'flex-start'
    },
    headerRight: {
        paddingTop: 6,
        //paddingLeft: 20,
        marginLeft: 'auto'
    },
    title: {
        fontSize: 30,
    },
    main: {
        marginTop: 30,
        height: '80%',
        //backgroundColor: 'rgba(255,255,255,0.1)',
    },
    meaning: {
        marginBottom: 5,
        backgroundColor: 'blue',
    }
})