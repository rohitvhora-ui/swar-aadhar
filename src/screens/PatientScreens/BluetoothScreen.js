import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Bluetooth = () => {
    const size = 250;
    return (
        <View style={styles.main}>
            <View style={styles.iconContainer}>
                <TouchableOpacity>
                    <Icon name="bluetooth-audio" size={size} color="cadetblue" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.label}>Please connect to a bluetooth device to use this app</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        padding: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconContainer: {
        marginTop: 80,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 200,
        borderWidth: 1,
        borderColor: '#d2d2d2',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginVertical: 60
    }
})

export default Bluetooth;