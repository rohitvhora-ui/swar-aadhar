import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';

const DescribePictureTherapy = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label}>Describe the picture in 5 sentences</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={require('./../../../assets/RP-Adult.jpg')} />
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
    },
    imageContainer: {
        width: Math.round(Dimensions.get('window').width),
        alignItems: 'center'
    }
})

export default DescribePictureTherapy;