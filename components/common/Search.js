import React, {useState} from 'react'
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Search ({placeholder, onSubmit}) {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSubmit = () => {
        onSubmit(searchTerm.toLowerCase())
    }

    return (
        <View style={styles.container}>
            <TextInput 
                value={searchTerm} 
                onChangeText={setSearchTerm}
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