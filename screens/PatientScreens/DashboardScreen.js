import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cards from './../../components/Cards';

const onCardClick = (navigation, routeName) => {
    navigation.navigate(routeName);
}

const Dashboard = ({navigation}) => {
    const cardsSets = [
            { 
                label: 'Analysis Report', 
                icon: 'google-analytics', 
                routeName: 'SeverityIndex', 
                size: 60,
                description: 'View reports for past therapies'
            },
            { 
                label: 'Medical History',
                icon: 'book',
                routeName: 'Reports', 
                size: 60, 
                description: 'View medical history'
            },
            { 
                label: 'Audio File Manager', 
                icon: 'bluetooth-audio', 
                routeName: 'History', 
                size: 60, 
                description: 'View list of recorded audio files'
            }
    ];
    return (
        <View style={styles.dashboard}>
            <View style={styles.header}>
                <Text style={styles.label}>Choose any of the following </Text>
            </View>
            <Cards cards={cardsSets} navigation={navigation} onCardClick={(routeName) => onCardClick(navigation, routeName)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    dashboard: {
        paddingVertical: 5
    },
    header: {
        marginVertical: 20,
        paddingHorizontal: 30
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#555'
    }
})

export default Dashboard;