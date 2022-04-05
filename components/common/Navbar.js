import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Navbar ({ navigation }) {

    return (
        <View style={styles.navbar}>
            <TouchableOpacity 
              style={styles.homeIcon} 
              onPress={() => {navigation.navigate('home')}}>
                <Ionicons name="home-outline" size={28} color="white" />
            </TouchableOpacity>
            <View style={styles.title}>
                <Text style={styles.title}>Dictionary</Text>
            </View>
            <TouchableOpacity 
              style={styles.favoritesIcon} 
              onPress={() => {navigation.navigate('favorites')}}>
                <Ionicons name="heart-outline" size={28} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#1976d2',
        flexDirection: 'row'
    },
    title: {
        marginLeft: 'auto',
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    homeIcon: {
    },
    favoritesIcon: {
        marginLeft: 'auto'
    }
});