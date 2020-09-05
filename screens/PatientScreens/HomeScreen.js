import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../../components/Card';
import Icon from "react-native-vector-icons/FontAwesome";

const onCardClick = (navigation) => {
    navigation.navigate('Register');
}

const Home = (props) => {
    
    const cards = [{sublabel: 'Parent', name: 'male', size: 50}, {sublabel: 'Child', name: 'child', size: 50}];
    
    return (
        <View>
            <View style={styles.title}>
                <Text style={styles.sub}>Who is there?</Text>
            </View>
            <View style={styles.cardsLayout}>
                {
                    cards.map(card => {
                        return (
                            <Card key={card.name} sublabel={card.sublabel} onclick={() => onCardClick(props.navigation)}>
                                <Icon name={card.name} size={card.size} color="cadetblue" />
                            </Card>
                        );
                    })
                }
            </View>
            <View style={styles.addProfileView}>
                <Icon name="plus" size={75} color="cadetblue" />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        fontWeight: 'bold',
    },
    titleText: {
        textTransform: 'uppercase',
        fontSize: 30
    },
    sub: {
        color: 'cadetblue',
        fontSize: 20,
        marginVertical: 30
    },
    cardsLayout: {
        flexDirection:"row", 
        justifyContent: 'space-around',
        marginTop: 40
    },
    addProfileView: {
        alignItems: 'center',
        marginTop: 60
    }
});

export default Home;