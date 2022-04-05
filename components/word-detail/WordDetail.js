import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { List, Colors } from 'react-native-paper';

import { getWordFromAPI } from '../../redux/actions/word'
import { addFavorite, removeFavorite } from '../../redux/actions/favorites'
import { getWord, isWordLoading, checkIsFavorite } from '../../redux/selectors'

import Meaning from './Meaning';

export default function WordDetail ({ navigation, route }) {

    const word = route.params.word;
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
                <ActivityIndicator size="small" color="white" /> 
                :
                wordInfo === null 
                ?
                <Text>Word not found</Text>
                :
                <View>
                    <View style={styles.header}>
                        <View style={styles.headerLeft}>
                            <Text style={styles.title}>{wordInfo.word}</Text>
                            <Text>{wordInfo.phonetic || 'N/A'}</Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.headerRight} 
                            onPress={toggleFavorite}>
                            <Ionicons name={isFavoriteWord ? 'heart' : 'heart-outline'} size={28} color="#f55e53" />
                        </TouchableOpacity>
                    </View>
                    <View>
                        {
                            wordInfo.meanings.map((meaning, index) => 
                                <Meaning 
                                    key={`${meaning.partOfSpeech}_${index}`} 
                                    meaning={meaning}
                                    navigation={navigation}
                                />
                            )
                        }
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flexDirection: 'row'
    },
    headerLeft: {
        alignSelf: 'flex-start'
    },
    headerRight: {
        paddingTop: 6,
        paddingLeft: 20
    },
    title: {
        fontSize: 30,
    }
})