import {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Accordion ({title, initiallyOpen = false, style, children}) {

    const [isOpen, setIsOpen] = useState(initiallyOpen)

    const toggleOpenStatus = () => {
        console.log('Now is ', !previousState ? 'open' : 'closed')
        setIsOpen(previousState => !previousState)
    }

    return (
        <View style={style}>
            <TouchableOpacity  
            onPress={toggleOpenStatus}>
                <View style={styles.header}>
                    <View style={styles.inner}>
                        <Text>{title}</Text>
                        <Ionicons name="home-outline" size={28} color="black" />
                    </View>
                </View>
            </TouchableOpacity>
            <View style={styles.children}>
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
    },
    inner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        height: 80,
    },
    children: {
        color: 'green',
    }
});