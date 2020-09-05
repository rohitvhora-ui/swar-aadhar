import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const QuestionnaireTherapy = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label}>Conversation - Meet and Greet</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('././../../assets/conversation.jpg')} />
            </View>
            <View style={styles.header}>
                <Text style={styles.label}>Conversation - Introduction</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('././../../assets/conversation-intro.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5,
        paddingHorizontal: 30
    },
    header: {
        marginVertical: 15
    },
    label: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: '500',
        color: '#555'
    },
    main: {
        fontSize: 20,
        marginVertical: 15,
        color: '#333'
    },
    horizontalLine: {
        borderTopWidth: 1,
        borderTopColor: '#555',
        width: Math.round(Dimensions.get('window').width) - 50,
        marginVertical: 15
    },
    imageContainer: {
        width: Math.round(Dimensions.get('window').width),
        marginBottom: 60
    }
})

export default QuestionnaireTherapy;