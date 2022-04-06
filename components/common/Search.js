import React, { useState } from 'react'

import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function Search ({placeholder, onSubmit}) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleChangeText = (newText) => {
        let formattedText = newText.replace(/[^a-zA-Z]/g, '')
        setSearchTerm(formattedText)
    }

    const handleSubmit = () => {
        if (searchTerm) {
            onSubmit(searchTerm.toLowerCase())
            setSearchTerm('')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput 
                value={searchTerm} 
                onChangeText={handleChangeText}
                style={styles.search} 
                placeholder={placeholder}
                onSubmitEditing={handleSubmit}
                clearButtonMode="always">
            </TextInput>
            <TouchableOpacity onPress={handleSubmit}>
                <FontAwesome name="search" size={24} color="#1976d2" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    search: {
        color: 'white',
        textAlign: 'center',
        maxWidth: 200,
        fontSize: 30,
        marginRight: 15
    }
});