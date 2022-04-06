import React from 'react'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { List, Badge } from 'react-native-paper'

import routes from '../../resources/routes';

export default function Meaning ({ meaning, navigation }) {

    const handleNavigation = (synonym) => {
        navigation.navigate(routes.WORD_DETAIL, { word: synonym })
    }

    return (
        <View style={styles.container}>
            <List.Accordion 
                style={styles.accordion} 
                title={<Text style={styles.accordionTitle}>{meaning.partOfSpeech}</Text>}
            >
                <View style={styles.accordionInner}>
                    <View style={styles.synonyms}>
                        {
                            meaning.synonyms.map((synonym, index) => 
                                <TouchableOpacity 
                                    key={`${synonym}_${index}`}  
                                    onPress={() => handleNavigation(synonym)}
                                >
                                    <Badge size={26} style={styles.synonym}>
                                        {`  ${synonym}  `}
                                    </Badge>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    {
                        meaning.definitions.map((definition, index) => 
                            <View style={styles.definition} key={`${definition}_${index}`}>
                                <Text style={styles.definitionText} >
                                    {`${index + 1}. ${definition.definition}`}
                                </Text>
                                { 
                                    definition.example && 
                                    <Text style={styles.exampleText}>"{definition.example}"</Text> 
                                }
                            </View>
                        )
                    }
                </View>
            </List.Accordion>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginBottom: 10,
      //maxHeight: '200',
    },
    accordion: {
        backgroundColor: 'transparent',
        color: 'yellow',
    },
    accordionTitle: {
        color: '#1976d2',
    },
    accordionInner: {
        padding: 10,
        borderWidth: 1,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderColor: 'rgba(255,255,255,0.2)',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    synonyms: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    synonym: {
        backgroundColor: '#1976d2',
        fontSize: 15,
        margin: 4,
    },
    definition: {
        marginBottom: 10
    },
    definitionNumber: {
        color: 'gray',
    },
    definitionText: {
        fontWeight: 'bold',
    },
    exampleText: {
        fontStyle: 'italic',
        color: 'rgba(0,0,0,0.6)',
    }
})