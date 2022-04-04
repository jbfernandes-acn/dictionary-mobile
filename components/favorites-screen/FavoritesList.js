import React from 'react'
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { List, Colors } from 'react-native-paper';

export default function FavoritesList () {
    const navigation = useNavigation();

    const favorites = ['banana','apple','kiwi','computer', 'obnoxious', 'dictionary', 'obsolete', 'redundant', 'editor', 'words', 'list', 'phone', 'handset', 'wow'];

    const handleNavigation = (word) => {
        navigation.navigate('worddetail', { word })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Favorites</Text>
            </View>
            <FlatList 
                keyExtractor={(favorite) => favorite}
                data={favorites}
                persistentScrollbar={true}
                renderItem={({item}) => (
                    <List.Item
                        title={item}
                        onPress={() => handleNavigation(item)}
                        style={styles.favoriteItem}
                        left={ props => 
                            <TouchableOpacity  
                                onPress={() => console.log('DELETE ', item)}>
                                <List.Icon {...props} color={Colors.blue900} icon="delete" />
                            </TouchableOpacity>
                        }
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'left',
        color: '#1976d2',
        marginBottom: 30,
        fontSize: 30
    },
    header: {
        flexDirection: 'column'
    },
    container: {
        padding: 30,
        paddingBottom: 200,
        /*
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
        */
    },
    favoriteItem: {
        color: 'white',
    },
    favoriteItemText: {
        fontSize: 28
    },
    homeIcon: {
    },
    favoritesIcon: {
        marginLeft: 'auto'
    }
});