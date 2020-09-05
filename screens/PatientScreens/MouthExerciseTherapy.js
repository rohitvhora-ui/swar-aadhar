import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MouthExerciseTherapy = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label}>Mouth Exercise Therapy</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('././../../assets/RP-Adult.jpg')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5
    },
    header: {
        marginVertical: 30,
        paddingHorizontal: 30
    },
    label: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: '500',
        color: '#555'
    }
})

export default MouthExerciseTherapy;