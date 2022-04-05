import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { List, Colors } from 'react-native-paper';

import { removeFavorite } from '../../redux/actions/favorites';
import { areFavoritesLoading, getFavorites } from '../../redux/selectors';

import { getData, storeData } from '../../resources/storage';

export default function FavoritesList ({ navigation }) {

    const dispatch = useDispatch();
    const [sortAscending, setSortAscending] = useState(true)
    const favorites = useSelector(getFavorites(sortAscending));
    const isLoading = useSelector(areFavoritesLoading)

    const handleNavigation = (word) => {
        navigation.navigate('worddetail', { word })
    }

    const handleRemoveFavorite = (favorite) => {
        dispatch(removeFavorite(favorite))
    }

    const toggleSortOrder = () => {
        setSortAscending(previousSortAscending => !previousSortAscending)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Favorites</Text>
                <TouchableOpacity 
                    style={styles.headerRight} 
                    onPress={toggleSortOrder}>
                    <FontAwesome 
                        name={sortAscending ? 'sort-alpha-desc' : 'sort-alpha-asc'} 
                        size={22} color="#1976d2" 
                    />
                </TouchableOpacity>
            </View>
            {
                isLoading ?
                <ActivityIndicator size="small" color="white" /> :
                <FlatList 
                    keyExtractor={(favorite) => favorite}
                    data={favorites}
                    persistentScrollbar={true}
                    renderItem={({item}) => (
                        <List.Item
                            title={<Text style={styles.favoriteItem}>{item}</Text>}
                            onPress={() => handleNavigation(item)}
                            left={ props => 
                                <TouchableOpacity  
                                    onPress={() => handleRemoveFavorite(item)}>
                                    <List.Icon {...props} color={Colors.blue900} icon="delete" />
                                </TouchableOpacity>
                            }
                        />
                    )}
                />
            }
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
        flexDirection: 'row'
    },
    headerRight: {
        paddingTop: 5,
        marginLeft: 'auto'
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
        color: 'black',
        fontSize: 24
    },
    homeIcon: {
    },
    favoritesIcon: {
        marginLeft: 'auto'
    }
});