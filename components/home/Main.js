import React from 'react'

import { StyleSheet, Text, View } from 'react-native'

import Search from '../common/Search'
import WordOfTheDay from './WordOfTheDay'
import routes from '../../resources/routes'

export default function Main ({navigation}) {

    const handleSearch = (searchTerm) => {
        navigation.navigate(routes.WORD_DETAIL, { word: searchTerm })
    }

    return (
        <View style={styles.main}>
            <Text style={styles.title}>English Dictionary</Text>
            <Search 
                placeholder="Enter a word" 
                onSubmit={(searchTerm) => {handleSearch(searchTerm)}}
            />
            <WordOfTheDay style={styles.wordOfTheDay}/>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#1976d2',
        marginBottom: 30,
        fontSize: 35
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
    },
    wordOfTheDay: {
    }
});