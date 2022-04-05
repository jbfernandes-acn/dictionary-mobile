import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { List } from 'react-native-paper';

export default function Meaning ({ meaning, navigation }) {

    return (
        <View>
            <List.Accordion title={meaning.partOfSpeech}>
                {
                    meaning.synonyms.map((synonym, index) => 
                        <Text key={`${synonym}_${index}`}>{synonym}</Text>
                    )
                }
                {
                    meaning.definitions.map((definition, index) => 
                        <View style={styles.definition}>
                            <Text key={`${definition}_${index}`}>{`${index + 1}. ${definition.definition}`}</Text>
                            { definition.example && <Text key={index}>"{definition.example}"</Text> }
                        </View>
                    )
                }
            </List.Accordion>
        </View>
    )
}

const styles = StyleSheet.create({
    definition: {
        marginBottom: 10
    }
})