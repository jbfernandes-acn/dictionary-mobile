import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { List, Colors } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';


export default function WordDetail () {
    const route = useRoute();

    const word = route.params.word;

    console.log(word);

    return (
        <View>
            <Text>{word}</Text>
        </View>
    )
}