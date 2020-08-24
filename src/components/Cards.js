import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from './../components/Card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Cards = props => {
    const cards = props.cards;
    const size = 50;
    return (
        <View style={styles.cardsLayout}>
            { cards.map(card => {
                    return (
                        <Card navigation={props.navigation} key={card.icon} routeName={props.routeName} onCardClick={() => props.onCardClick(card.routeName)}>
                            <View style={ styles.cardContent }>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon style={{ flex: 1, marginTop: 30 }} name={card.icon} size={size} color="cadetblue" />
                                    <View style={ styles.textContent }>
                                        <Text style={ styles.label }>{card.label}</Text>
                                        <Text style={ styles.description }>{card.description}</Text>
                                    </View>
                                </View>
                            </View>
                        </Card>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    cardsLayout: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContent: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textContent: { 
        flexDirection: 'column', 
        position: 'absolute',
        left: 80,
        top: 30
    },
    label: {
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: '500',
        alignItems: 'center',
        flex: 1,
        marginBottom: 10
    },
    description: {
        color: '#555',
        fontStyle: 'italic',
        fontSize: 14
    }
})

export default Cards;