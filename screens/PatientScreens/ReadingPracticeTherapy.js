import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const texts = [
    'I', 'I see', 'I see a', 'I see a rainbow', 'I see a rainbow in', 'I see a rainbow in the', 
    'I see a rainbow in the sky', 'I see a rainbow in the sky and', 'I see a rainbow in the sky and it', 
    'I see a rainbow in the sky and it is', 'I see a rainbow in the sky and it is beautiful'
]

const ReadingPracticeTherapy = () => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                {texts.map(text => {
                    return (
                        <View>
                            <Text style={styles.main}>{text}</Text>
                        </View>
                    );
                })}
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
})

export default ReadingPracticeTherapy;