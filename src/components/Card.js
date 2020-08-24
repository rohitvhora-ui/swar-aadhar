import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Card = (props) => {
    return (
        <View>
            <TouchableOpacity style={styles.card} onPress={() => props.onCardClick()}>
                <View>
                    <View style={styles.boxContent}>{props.children}</View>
                </View>
                <View style={styles.sublabel}>
                    <Text>{props.sublabel}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    sublabel: {
        width: 120,
        marginVertical: 10,
        alignItems: 'center'
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        borderWidth: 0.5,
        borderStyle: 'solid',
        borderColor: '#d1d1d1',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginBottom: 0,
        width: '100%'
    }
})

export default Card;