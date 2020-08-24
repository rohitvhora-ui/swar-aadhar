import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReadingPracticeTherapy = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Rainbow</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 26,
        color: 'cadetblue',
        marginVertical: 18
    }
})

export default ReadingPracticeTherapy;