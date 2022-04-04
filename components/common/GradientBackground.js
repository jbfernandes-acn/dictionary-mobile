import React from 'react'
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientBackground () {
    return (
        <LinearGradient
            colors={['#ffff', '#1976d2']}
            style={styles.background}
        />
    );
}

const styles = StyleSheet.create({
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
    },
});